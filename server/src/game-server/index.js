const Server = require('colyseus').Server;
const WebSocketServer=require('uws').Server;
const LobbyRoom =require('./room/Lobby')
const BattleRoom =  require('./room/Battle')

const gameServer=new Server({
    engine:WebSocketServer,
});
gameServer.register('lobby',LobbyRoom);
gameServer.register('battle',BattleRoom);
gameServer.onShutdown(function(){
    console.log(`game server is going down.`);
});
module.exports = gameServer;
