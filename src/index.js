const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db/db.connection');

db(); //start DB
const linkRoutes = require('./routes/link.route');

app.use(express.json());
app.use(cors());
app.use(linkRoutes);

app.get('/', (req, res) => {
  console.log(req.headers.host);
  console.log(req.hostname);
  res.send({
    message: 'Api Service  is up',
  });
});

app.listen(3001, () => {
  console.log('Above and Beyond');
});
