const BaseRoom = require('colyseus').Room;
class Room extends BaseRoom{
    constructor(){
        super()
        this.maxClients=4;
    }
    onInit (options) {
        console.log("BasicRoom created!", options);
    }
}
