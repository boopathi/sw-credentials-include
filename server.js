const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());

app.get('/200', function (req, res) {
  if (req.cookies['X-Cookie']) res.end('Cookie Found');
  else res.end('Cookie NOT Found');
});

app.get('/del', function (req, res) {
  res.clearCookie('X-Cookie');
  res.end('Cookie Cleared');
});

app.get('/', function(req, res) {
  res.cookie('X-Cookie', 'cookie');
  res.header('Content-Type', 'text/html');

  let html = fs.readFileSync(path.join(__dirname, 'index.html')).toString();
  let sw = fs.readFileSync(path.join(__dirname, 'sw.html')).toString();

  if (req.headers.host === "localhost:3000") res.end(html + sw);
  else res.end(html);
});

// sw
app.listen(3000);

// no sw
app.listen(4000);
