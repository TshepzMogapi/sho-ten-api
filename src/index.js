const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('api to shorten a link');
});

app.listen(3001, () => {
  console.log('Above and Beyond');
});
