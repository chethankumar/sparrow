const bunyan = require('bunyan');

let instance = null;
module.exports.createLogger = (name, logLevel = 'info') => {
  if (!instance || instance == null) {
    instance = bunyan.createLogger({
      name,
      streams: [
        {
          stream: process.stdout,
          level: logLevel,
        },
        {
          type: 'rotating-file',
          path: 'logs/messages.log',
          level: logLevel,
          period: '1d',
        },
        {
          type: 'rotating-file',
          path: 'logs/trace.log',
          level: logLevel,
          period: '1d',
        },
      ],
    });
    instance.level(logLevel);
  }
  return instance;
};

module.exports.getLogger = () => instance;

