const response = require('../utils/Response');
const { log, db } = require('../server');
const { writeToJSONFile } = require('../jsonserver/JSONServer');

module.exports.saveJSON = (req, res) => {
  log.info('saving JSON');
  if (req.body) {
    writeToJSONFile(req.params.applicationId, req.body);
  }
  response.ok(req, res, { message: 'JSON is getting saved' });
};
