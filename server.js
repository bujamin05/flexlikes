const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 4173;
const baseDir = __dirname;
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function safePath(urlPath) {
  const cleanPath = urlPath.split('?')[0].split('#')[0];
  const normalized = path.normalize(cleanPath).replace(/^\//, '');
  return path.join(baseDir, normalized || 'index.html');
}

function sendNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
}

const server = http.createServer((req, res) => {
  const filePath = safePath(req.url);

  if (!filePath.startsWith(baseDir)) {
    sendNotFound(res);
    return;
  }

  fs.stat(filePath, (statErr, stats) => {
    if (statErr || !stats.isFile()) {
      sendNotFound(res);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`FlexLikes server running at http://0.0.0.0:${PORT}`);
});
