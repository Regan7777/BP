const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(process.cwd(), 'dist');
const host = '127.0.0.1';
const port = Number(process.env.PORT || 4321);
const mime = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8'
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${host}:${port}`).pathname);
  const relative = pathname.replace(/^\/+/, '');
  let target = path.join(root, relative);
  if (pathname.endsWith('/')) target = path.join(target, 'index.html');
  else if (!path.extname(target) && fs.existsSync(path.join(target, 'index.html'))) target = path.join(target, 'index.html');

  const resolved = path.resolve(target);
  if (!resolved.startsWith(path.resolve(root)) || !fs.existsSync(resolved) || fs.statSync(resolved).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, { 'Content-Type': mime[path.extname(resolved).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(resolved).pipe(response);
}).listen(port, host, () => {
  console.log(`Static preview: http://${host}:${port}/`);
});
