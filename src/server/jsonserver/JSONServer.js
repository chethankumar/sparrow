const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const jsonfile = require('jsonfile');
const { app, log } = require('../server');

module.exports.loadJSONs = () => {
  fs.readdir(__dirname, (err, files) => {
    if (files) {
      files.forEach((file) => {
        if (file.endsWith('.json')) {
          const fileName = file.substring(0, file.indexOf('.json'));
          const router = jsonServer.router(path.join(__dirname, `${file}`));
          app.use(`/${fileName}`, router);
        }
      });
    }
  });
};

module.exports.configureJSON = (username) => {
  const router = jsonServer.router(path.join(__dirname, `${username}.json`));
  app.use(`/${username}`, router);
};

module.exports.writeToJSONFile = (fileName, jsonContent) => {
  log.info('Persisting data to file');
  jsonfile.writeFile(path.join(__dirname, `${fileName}.json`), jsonContent, (err) => {
    if (err) {
      log.info('Error in persisting json');
      log.error(err);
    }
    log.info('Saved json');
    this.configureJSON(fileName);
  });
};

