const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Foodschema = new schema({
    Code :{
        type : String,
        required: true
    },
    Image : {
        type : String,
        // required : true
    },
    Name : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    }
})

// table and path
const Food = mongoose.model("food",Foodschema);


//must export this file.
module.exports = Food;
