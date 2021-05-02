const express = require('express');
const app = express();
const db = require('./db/db.connection');
const { nanoid } = require('nanoid');

db(); //start DB
const linkRoutes = require('./routes/link.route');

app.use(express.json());
app.use(linkRoutes);

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:4200']; //TODO: mv 2 env
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.get('/', (req, res) => {
  console.log(req.headers.host);
  console.log(req.hostname);
  const id = nanoid(8);
  console.log(id);
  res.send({
    message: 'Api Service  is up',
  });
});

app.listen(3001, () => {
  console.log('Above and Beyond');
});
