const BaseRoom = require('colyseus').Room;
class Room extends BaseRoom{
    constructor(opts){
        super(opts)
        this.maxClients=4;
    }
    onInit (options) {
        console.log("BasicRoom created!", options);
    }

    onJoin (client) {
        this.broadcast(`${ client.sessionId } joined.`);
    }

    onLeave (client) {
        this.broadcast(`${ client.sessionId } left.`);
    }

    onMessage (client, data) {
        console.log("BasicRoom received message from", client.sessionId, ":", data);
        this.broadcast(`(${ client.sessionId }) ${ data.message }`);
    }

    onDispose () {
        console.log("Dispose BasicRoom");
    }
}
module.exports=Room;
