const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
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
    Jobtitle : {
        type : String,
        required: true
    },
    Salary : {
        type : String,
        required: true
    },

})

//customer table and path
const Employee = mongoose.model("Employee",EmployeeSchema);
module.exports = Employee;