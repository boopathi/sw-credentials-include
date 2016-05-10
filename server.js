const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());

app.get('/200', function (req, res) {
  if (req.cookies['X-Cookie']) {
    console.log('Cookie Found');
    res.end('Cookie Found');
  } else {
    console.log('Cookie NOT Found');
    res.end('Cookie NOT Found');
  }
});

app.get('/', function(req, res) {
  res.cookie('X-Cookie', 'cookie');
  if (req.headers.host === "localhost:3000")
    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
  else
    res.end(fs.readFileSync(path.join(__dirname, 'no-sw.html')));
});

// sw
app.listen(3000);

// no sw
app.listen(4000);
