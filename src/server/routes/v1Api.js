const server = require('../server');
const loginEngine = require('../engines/LoginEngine');
const appEngine = require('../engines/AppEngine');

server.app.use('/api/v1', server.router);

server.router.post('/apps/:applicationId/login', loginEngine.login);
server.router.post('/apps/:applicationId/signup', loginEngine.signup);

server.router.post('/apps/:applicationId/savejson', appEngine.saveJSON);
