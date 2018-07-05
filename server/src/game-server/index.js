const Server = require('colyseus').Server;
const WebSocketServer=require('uws').Server;
const Room =require('./room/Room')
const gameServer=new Server({
    engine:WebSocketServer
});
gameServer.register('room',Room);
module.exports = gameServer;
