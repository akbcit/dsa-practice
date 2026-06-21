const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const os = require('os');

const PORT = 8080;
const STATIC = __dirname;
const PROJECT_DIR = path.join(os.tmpdir(), 'dsa-runner');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

// Detect installed .NET version
function getTargetFramework() {
  try {
    const v = execSync('dotnet --version', { windowsHide: true }).toString().trim();
    const major = parseInt(v.split('.')[0]);
    if (major >= 9) return 'net9.0';
    if (major >= 8) return 'net8.0';
    if (major >= 7) return 'net7.0';
    return 'net6.0';
  } catch { return 'net8.0'; }
}

// Create a persistent project once — much faster than recreating each time
function ensureProject() {
  if (fs.existsSync(path.join(PROJECT_DIR, 'app.csproj'))) return;
  fs.mkdirSync(PROJECT_DIR, { recursive: true });
  const tf = getTargetFramework();
  fs.writeFileSync(path.join(PROJECT_DIR, 'app.csproj'),
`<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>${tf}</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <AllowUnsafeBlocks>true</AllowUnsafeBlocks>
  </PropertyGroup>
</Project>`);
  console.log(`Created project (${tf}), restoring packages...`);
  execSync('dotnet restore', { cwd: PROJECT_DIR, windowsHide: true });
  console.log('Ready.');
}

function executeCode(code) {
  return new Promise((resolve) => {
    fs.writeFileSync(path.join(PROJECT_DIR, 'Program.cs'), code, 'utf8');
    exec('dotnet run --no-restore', {
      cwd: PROJECT_DIR,
      timeout: 15000,
      windowsHide: true,
    }, (err, stdout, stderr) => {
      resolve({ stdout: stdout || '', stderr: stderr || '', exitCode: err ? (err.code || 1) : 0 });
    });
  });
}

// ─── PROGRESS FILE ────────────────────────────────────────────────────────────
const PROGRESS_FILE = path.join(STATIC, 'dsa_progress.json');

function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); }
  catch { return null; }
}

function saveProgress(data) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2), 'utf8');
}

// ─── SERVER ───────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  // GET /progress — load from file
  if (req.method === 'GET' && req.url === '/progress') {
    const data = loadProgress();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data || {}));
    return;
  }

  // POST /progress — save to file
  if (req.method === 'POST' && req.url === '/progress') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', () => {
      try {
        saveProgress(JSON.parse(body));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/execute') {
    let body = '';
    req.on('data', c => body += c);
    req.on('end', async () => {
      try {
        const { code } = JSON.parse(body);
        const result = await executeCode(code);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  let urlPath = req.url.split('?')[0];
  if (urlPath === '/' || urlPath === '/dsa_ide' || urlPath === '/dsa_ide.html') urlPath = '/dsa_ide.html';
  const filePath = path.join(STATIC, urlPath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });
});

try { ensureProject(); } catch (e) { console.error('dotnet not found:', e.message); }

server.listen(PORT, () => {
  console.log(`\n  DSA IDE → http://localhost:${PORT}/dsa_ide.html\n`);
});
