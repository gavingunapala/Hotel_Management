const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomsSchema = new Schema({
    RoomType :{
        type : String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    Sleeps : {
        type : Number,
        required : true
    },
    CurrentPrice : {
        type : Number,
        required : true
    },
    Facilities : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    }
})

// table and path
const Room = mongoose.model("Room",RoomsSchema);


//must export this file.
module.exports = Room;
