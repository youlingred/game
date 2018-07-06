const Server = require('colyseus').Server;
const WebSocketServer=require('uws').Server;
const Room =require('./room/Room')
const gameServer=new Server({
    engine:WebSocketServer,
    verifyClient:(info, next)=>{
        console.log(info);
        next(true);
    }
});
gameServer.register('chat',Room);
gameServer.onShutdown(function(){
    console.log(`game server is going down.`);
});
module.exports = gameServer;
