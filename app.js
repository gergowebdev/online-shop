const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);

// const http = require('http');
// const server = http.createServer(app);
// server.listen(4000, () => {
// console.log('Server is running on http://localhost:4000');
// });
