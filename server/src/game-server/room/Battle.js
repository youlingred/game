const Room = require('colyseus').Room;
const LogicFactory =require('../logic/LogicFactory')
class Battle extends Room{
    onInit (options) {
        console.log(options)
        console.log("JOINING ROOM");
    }

    onJoin (client, options, auth) {
        console.log(options)
        console.log("CREATING NEW ROOM");
    }

    requestJoin (options, isNewRoom) {
        // if(isNewRoom){
        //     this.setMetadata({logic:LogicFactory.create(options.roomType||'goldenFlower')});
        // }
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
