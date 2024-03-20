// require libraries
const express = require('express');

// app setup
const app = express();

// middleware

// routes
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start server

app.listen(3005, () => {
  console.log('Gif Search listening on port localhost:3005!');
});
