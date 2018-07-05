const gameServer = require('./game-server');
const app = require('./web-server');
gameServer.attach({server:app});
gameServer.listen(3000);
