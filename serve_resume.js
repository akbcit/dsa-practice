const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const PORT = 3457;
const DIR = __dirname;

const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png' };

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith('/download-pdf')) {
    try {
      const reqUrl = new URL(req.url, 'http://localhost');
      const variant = reqUrl.searchParams.get('variant');
      let htmlFile = 'resume.html';
      let pdfName = 'Aditya_Kumar_Resume.pdf';
      if (variant === 'dotnet') {
        htmlFile = 'resume-dotnet.html';
        pdfName = 'Aditya_Kumar_Resume_Backend.pdf';
      } else if (variant === 'fullstack') {
        htmlFile = 'resume-fullstack.html';
        pdfName = 'Aditya_Kumar_Resume_FullStack.pdf';
      }
      const browser = await puppeteer.launch({
        args: ['--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36']
      });
      const page = await browser.newPage();
      await page.goto('http://localhost:' + PORT + '/' + htmlFile, { waitUntil: 'networkidle0' });
      await page.evaluate(() => {
        document.getElementById('toolbar').style.display = 'none';
        const el = document.getElementById('resume');
        el.style.margin = '0';
        el.style.boxShadow = 'none';
      });
      const pdf = await page.pdf({
        format: 'Letter',
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
      });
      await browser.close();
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="' + pdfName + '"');
      res.end(pdf);
    } catch (e) {
      res.writeHead(500);
      res.end('Error: ' + e.message);
    }
    return;
  }

  let filePath = path.join(DIR, req.url === '/' ? 'resume.html' : req.url);
  let ext = path.extname(filePath);
  try {
    const data = fs.readFileSync(filePath);
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log('Resume server running at http://localhost:' + PORT);
  require('child_process').exec('start http://localhost:' + PORT);
});
