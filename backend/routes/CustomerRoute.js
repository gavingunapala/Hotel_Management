const router = require("express").Router();
const { request } = require("express");
let CustomerModel = require("../models/CustomerModel");

//add data to customer table
//./customer/add
//Post request
//http://localhost:8090/customer/add
router.route("/add").post((req,res)=>{
    const Name = req.body.Name;
    const Address = req.body.Address;
    const PhoneNumber = req.body.PhoneNumber;
    const NICNumber = req.body.NICNumber;
    const Email = req.body.Email;
    const Password = req.body.Password;



    const newCustomer = new CustomerModel({
        Name,
        Address,
        PhoneNumber,
        NICNumber,
        Email,
        Password,
    })

    newCustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search customer
//http://localhost:8090/customer/
//Get Request
router.route("/").get((req,res)=>{
    CustomerModel.find().then((customers)=>{
        res.json(customers)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/customer/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Name,Address,PhoneNumber,NICNumber,Email,Password} = req.body;
    const updateUser = {
        Name,
        Address,
        PhoneNumber,
        NICNumber,
        Email,
        Password,

    }

    const update = await CustomerModel.findByIdAndUpdate(userId,updateUser).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete user
//http://localhost:8090/customer/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await CustomerModel.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the customer
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    CustomerModel.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let customer = await CustomerModel.findById(req.params.id);
    const data = {
        Name: req.body.Name || customer.Name,
        Address: req.body.Address || customer.Address,
        PhoneNumber: req.body.PhoneNumber || customer.PhoneNumber,
        NICNumber: req.body.NICNumber || customer.NICNumber,
        Email: req.body.Email || customer.Email,
        Password: req.body.Password || customer.Password,


    };
    customer = await CustomerModel.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(customer);
});

//Login
router.route("/login").post((req, res) => {
    const Password = req.body.Password;
    CustomerModel.findOne({ Email: req.body.Email }).then(customer => {
        // Check if Attendee exists
        if (!customer) {
            return res.status(404).json({Email: "Email not found"});
        } else {
            // Check password
            if (Password === customer.Password) {
                res.json(customer)
            } else {
                return res
                    .status(400)
                    .json({Password: "Password incorrect"});
            }
        }
    });
});
module.exports = router;