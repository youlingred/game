const gameServer = require('./game-server');
const webServer = require('./web-server');
const port = 3000;

gameServer.attach({server:webServer});
gameServer.listen(port);
console.log(`Listening on http://localhost:${ port }`);
