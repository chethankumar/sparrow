const express = require('express');
const bodyParser = require('body-parser');
const blocked = require('blocked');
const logger = require('./utils/Logger');
const mongoose = require('mongoose');
const jsonServer = require('json-server');

const app = express();
const Path = require('path');

module.exports.log = logger.createLogger('Quick Server', 'debug');
this.log.level('debug');

module.exports.router = express.Router();
module.exports.app = app;
app.use(express.static('./'));
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jsonServer.bodyParser);

app.get(['/overview'], (req, res) => {
  res.sendFile(Path.resolve('dist/index.html'));
});


const port = process.env.PORT || 3000;

blocked((ms) => {
  this.log.error(`************************** BLOCKED for ${ms} ms.`);
});


app.listen(port, () => {
  this.log.info(`app listening on ${port}`);
});

mongoose.connect('mongodb://chethan21:chethan21@ds119018.mlab.com:19018/quickserver');
module.exports.db = mongoose.connection;
this.db.on('error', () => { this.log.error('connection error:'); });
this.db.once('open', () => {
  // we're connected!
  this.log.info('Connected to Mongo DB');
});


require('./routes/v1Api');

