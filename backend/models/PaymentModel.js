const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    Id : {
        type : String,
        required: false
    },
    Name: {
        type: String,
        required: true
    },
    PhoneNumber : {
        type : String,
        required: true
    },
    NICNumber : {
        type : String,
        required: true
    },
    CardNumber: {
        type : String,
        required: true
    },
    CVV : {
        type : String,
        required: true
    },
    ExpierDate: {
        type : Date,
        required: true
    },
    TotlePrice: {
        type : String,
        required: true
    },
    Type: {
        type : String,
        required: true
    },

})

//Payment table and path
const Payment = mongoose.model("Payment",PaymentSchema);
module.exports = Payment;
