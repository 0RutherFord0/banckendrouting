const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/netflix', { useNewUrlParser: true });
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use('/', routes);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  }
  
main();