const router = require("express").Router();
const { request } = require("express");
let PaymentModel = require("../models/PaymentModel");

//add data to Employee table
//./Payment/add
//Post request
//http://localhost:8090/Payment/add
router.route("/add").post((req,res)=>{
    const Id = req.body.Id;
    const Name = req.body.Name;
    const PhoneNumber = req.body.PhoneNumber;
    const NICNumber = req.body.NICNumber;
    const CardNumber = req.body.CardNumber;
    const CVV = req.body.CVV;
    const ExpierDate = req.body.ExpierDate;
    const TotlePrice = req.body.TotlePrice;
    const Type = req.body.Type;

    const newPayment = new PaymentModel({
        Id,
        Name,
        PhoneNumber,
        NICNumber,
        CardNumber,
        CVV,
        ExpierDate,
        TotlePrice,
        Type
    })

    newPayment.save().then(()=>{
        res.json("Payment Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search Payment
//http://localhost:8090/Payment/
//Get Request
router.route("/").get((req,res)=>{
    PaymentModel.find().then((Payment)=>{
        res.json(Payment)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8090/Payment/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id;
    const {Id,Name,Address, PhoneNumber, NICNumber, CardNumber, CVV, ExpierDate, TotlePrice, Type} = req.body;
    const updatePayment = {
        Id,
        Name,
        Address,
        PhoneNumber,
        NICNumber,
        CardNumber,
        CVV,
        ExpierDate,
        TotlePrice,
        Type

    }

    const update = await PaymentModel.findByIdAndUpdate(userId,updatePayment).then(()=>{
        res.status(200).send({status: "Payment Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete Payment
//http://localhost:8090/Payment/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let userId = req.params.id;

    await PaymentModel.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "Payment deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one of the Employee
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    PaymentModel.findById(id).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err);
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let Payment = await PaymentModel.findById(req.params.id);
    const data = {
        Id: req.body.Id || Payment.Id,
        Name: req.body.Name || Payment.Name,
        Address: req.body.Address || Payment.Address,
        PhoneNumber: req.body.PhoneNumber || Payment.PhoneNumber,
        NICNumber: req.body.NICNumber || Payment.NICNumber,
        CardNumber: req.body.CardNumber || Payment.CardNumber,
        CVV: req.body.CVV || Payment.CVV,
        ExpierDate: req.body.ExpierDate || Payment.ExpierDate,
        TotlePrice: req.body.TotlePrice || Payment.TotlePrice,
        Type: req.body.Type || Payment.Type

    };
    Payment = await PaymentModel.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(Payment);
});

module.exports = router;