const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CartSchema = new schema({
    UserID :{
        type : String,
        required: true
    },
    Name : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    },
    Quantity:{
        type : Number,
        // required : true
    }
})

// table and path
const Cart = mongoose.model("cart", CartSchema);


//must export this file.
module.exports = Cart;
