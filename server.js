const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const os = require('os');

const PORT = 8081;
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
  const csprojPath = path.join(PROJECT_DIR, 'app.csproj');
  const assetsPath = path.join(PROJECT_DIR, 'obj', 'project.assets.json');

  if (!fs.existsSync(csprojPath)) {
    fs.mkdirSync(PROJECT_DIR, { recursive: true });
    const tf = getTargetFramework();
    fs.writeFileSync(csprojPath,
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
  }

  if (!fs.existsSync(assetsPath)) {
    console.log('Restoring packages...');
    execSync('dotnet restore', { cwd: PROJECT_DIR, windowsHide: true });
  }

  console.log('Ready.');
}

let currentRun = null;

function killTree(pid) {
  try { execSync(`taskkill /F /T /PID ${pid}`, { windowsHide: true }); } catch {}
}

function executeCode(code) {
  // Kill any previous run still holding file locks
  if (currentRun) { killTree(currentRun.pid); currentRun = null; }

  // Re-restore if assets were wiped (e.g. Windows temp cleanup mid-session)
  const assetsPath = path.join(PROJECT_DIR, 'obj', 'project.assets.json');
  if (!fs.existsSync(assetsPath)) {
    try { execSync('dotnet restore', { cwd: PROJECT_DIR, windowsHide: true }); } catch {}
  }

  return new Promise((resolve) => {
    fs.writeFileSync(path.join(PROJECT_DIR, 'Program.cs'), code, 'utf8');

    // Use exec (goes through cmd.exe) so dotnet is always found in PATH on Windows
    const proc = exec('dotnet run --no-restore', {
      cwd: PROJECT_DIR,
      windowsHide: true,
    }, (err, stdout, stderr) => {
      clearTimeout(timer);
      currentRun = null;
      resolve({ stdout: stdout || '', stderr: stderr || '', exitCode: err ? (err.code || 1) : 0 });
    });
    currentRun = proc;

    const timer = setTimeout(() => {
      killTree(proc.pid);
      currentRun = null;
      resolve({ stdout: '', stderr: '[Timeout: execution exceeded 15s]', exitCode: 1 });
    }, 15000);
  });
}

// ─── PROGRESS FILE ────────────────────────────────────────────────────────────
const PROGRESS_FILE = path.join(STATIC, 'dsa_progress.json');

function loadProgress() {
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8')); }
  catch { return null; }
}

function saveProgress(data) {
  // Merge guides: keep any guide in the file that the client doesn't have yet
  try {
    const existing = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    if (existing.guides) {
      data.guides = data.guides || {};
      for (const [k, v] of Object.entries(existing.guides)) {
        if (v && (!data.guides[k] || data.guides[k] === '')) {
          data.guides[k] = v;
        }
      }
    }
  } catch {}
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

try { execSync('taskkill /F /IM dotnet.exe /T', { windowsHide: true }); } catch {}
try { ensureProject(); } catch (e) { console.error('dotnet not found:', e.message); }

server.listen(PORT, () => {
  console.log(`\n  DSA IDE → http://localhost:${PORT}/dsa_ide.html\n`);
});
