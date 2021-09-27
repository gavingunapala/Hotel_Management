const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomBookingSchema = new Schema({
    RoomType :{
        type : String,
        required: true
    },
    NoOfPeople : {
        type : Number,
        required : true
    },
    CheckInDate : {
        type : Date,
        required : true
    },
    CheckOutDate : {
        type : Date,
        required : true
    },
    CurrentPrice : {
        type : Number,
        required : false
    },
    UserID :{
        type : String,
        // required: true
    },
})

// table and path
const RoomBooking = mongoose.model("RoomBooking",RoomBookingSchema);


//must export this file.
module.exports = RoomBooking;
