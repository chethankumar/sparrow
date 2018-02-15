const server = require('../server');
const loginEngine = require('../engines/LoginEngine');
const productEngine = require('../engines/ProductEngine');

server.app.use('/api/v1', server.router);

server.router.post('/apps/:applicationId/login', loginEngine.login);
server.router.post('/apps/:applicationId/signup', loginEngine.signup);

server.router.get('/products/:productName', productEngine.getProductByName);
server.router.get('/category', productEngine.getAllCategories);
server.router.get('/category/:categoryName', productEngine.getProductsByCategory);
