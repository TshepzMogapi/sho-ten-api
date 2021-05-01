const express = require('express');
const app = express();
const db = require('./db/db.connection');
db(); //start DB
const linkRoutes = require('./routes/link.route');

app.use(express.json());
app.use(linkRoutes);

app.get('/', (req, res) => {
  res.send('api to shorten a link');
});

app.listen(3001, () => {
  console.log('Above and Beyond');
});
