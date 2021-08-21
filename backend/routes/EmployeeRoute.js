const router = require("express").Router();
const { request } = require("express");
let EmployeeModel = require("../models/EmployeeModel");

//add data to Employee table
//./Employee/add
//Post request
//http://localhost:8090/Employee/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Address = req.body.Address;
    const PhoneNumber = req.body.PhoneNumber;
    const NICNumber = req.body.NICNumber;
    const Jobtitle = req.body.Jobtitle;
    const Salary = req.body.Salary;



    const newEmployee = new EmployeeModel({
        Name,
        Address,
        PhoneNumber,
        NICNumber,
        Jobtitle,
        Salary,
    })

    newEmployee.save().then(()=>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search Employee
//http://localhost:8090/Employee/
//Get Request
router.route("/").get((req,res)=>{
    EmployeeModel.find().then((Employee)=>{
        res.json(Employee)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/Employee/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Name,Address,PhoneNumber,NICNumber,Jobtitle,Salary,} = req.body;
    const updateUser = {
        Name,
        Address,
        PhoneNumber,
        NICNumber,
        Jobtitle,
        Salary,

    }

    const update = await EmployeeModel.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "Employee Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete Employee
//http://localhost:8090/Employee/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await EmployeeModel.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Employee deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the Employee
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    EmployeeModel.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let Employee = await EmployeeModel.findById(req.params.id);
    const data = {
        Name: req.body.Name || Employee.Name,
        Address: req.body.Address || Employee.Address,
        PhoneNumber: req.body.PhoneNumber || Employee.PhoneNumber,
        NICNumber: req.body.NICNumber || Employee.NICNumber,
        Jobtitle: req.body.Jobtitle || Employee.Jobtitle,
        Salary: req.body.Salary || Employee.Salary,


    };
    Employee = await EmployeeModel.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(Employee);
});

//Login
router.route("/login").post((req, res) => {
    const Password = req.body.Password;
    EmployeeModel.findOne({ Email: req.body.Email }).then(customer => {
        // Check if Attendee exists
        if (!Employee) {
            return res.status(404).json({Email: "Email not found"});
        } else {
            // Check password
            if (Password === Employee.Password) {
                res.json(Employee)
            } else {
                return res
                    .status(400)
                    .json({Password: "Password incorrect"});
            }
        }
    });
});
module.exports = router;