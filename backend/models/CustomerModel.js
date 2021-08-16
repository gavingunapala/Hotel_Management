const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    Name : {
        type : String,
        required: true
    },
    Address: {
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
    Email : {
        type : String,
        required: true
    },
    Password : {
        type : String,
        required: true
    },

})

//customer table and path
const Customer = mongoose.model("Customer",customerSchema);
module.exports = Customer;


