const Room = require('colyseus').Room;
class Battle extends Room{
    onInit (options) {
        console.log(options)
        console.log("JOINING ROOM");
    }

    onJoin (client, options, auth) {
        console.log(client)
        console.log("CREATING NEW ROOM");
    }

    requestJoin (options, isNewRoom) {
        console.log(options)
        return (options.create)
            ? (options.create && isNewRoom)
            : this.clients.length > 0;
    }

    onMessage (client, message) {

    }

    onLeave (client) {
        console.log("ChatRoom:", client.sessionId, "left!");
    }

}
module.exports=Battle;
