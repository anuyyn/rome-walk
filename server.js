// 의존성 없는 정적 서버. `node server.js` 또는 시작.bat 으로 실행.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ROOT = __dirname;
const PORT = 5173;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index.html';
  const file = path.join(ROOT, path.normalize(rel).replace(/^([\/])+/, ''));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('없는 파일: ' + rel); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(buf);
  });
}).listen(PORT, '127.0.0.1', () => {
  const url = 'http://localhost:' + PORT + '/';
  console.log('로마 도보 지도 실행 중 →  ' + url);
  console.log('종료하려면 이 창에서 Ctrl+C');
  exec('start "" "' + url + '"', { shell: 'cmd.exe' });
});
