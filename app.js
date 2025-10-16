const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// a request alapból nem támogatja a body elemzését, például ha a user egy formot küld el, ezért kell a 3rd party package, ezen belül a urlencoded method
app.use(bodyParser.urlencoded());

// if a request is directly made for a file, you can enable static serving
// így oldjuk meg, hogy a public folderen belül a css file-ok elérhetőek legyenek a html file-ok számára, vagyis a user számára
// a __dirname itt egy globális változó, amit elér a node.js
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 error page
app.use(errorController.get404);

app.listen(4000);

// const http = require('http');
// const server = http.createServer(app);
// server.listen(4000, () => {
// console.log('Server is running on http://localhost:4000');
// });
