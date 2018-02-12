const server = require('../server');
const loginEngine = require('../engines/LoginEngine');

server.app.use('/api/v1', server.router);

server.router.post('/apps/:applicationId/login', loginEngine.login);
server.router.post('/apps/:applicationId/signup', loginEngine.signup);

