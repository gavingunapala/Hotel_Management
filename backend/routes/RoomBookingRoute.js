const router = require("express").Router();
const { request } = require("express");
let RoomBookingModel = require("../models/RoomBookingModel");

//add rooms
//http://localhost:8070/RoomBooking/add
router.route("/add").post((req,res)=>{
    const RoomType = req.body.RoomType;
    const NoOfPeople = req.body.NoOfPeople;
    const CheckInDate = req.body.CheckInDate;
    const CheckOutDate = req.body.CheckOutDate;
    const CurrentPrice = req.body.CurrentPrice;
    const UserID = req.body.UserID;

    const newRoomBooking = new RoomBookingModel({
        RoomType,
        NoOfPeople,
        CheckInDate,
        CheckOutDate,
        CurrentPrice,
        UserID
    })

    newRoomBooking.save().then(()=>{
        res.json("Room Booked Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

//search rooms
//http://localhost:8070/RoomBooking/
router.route("/").get((req,res)=>{
    RoomBookingModel.find().then((roombooking)=>{
        res.json(roombooking)
    }).catch((err)=>{
        console.log(err)
    })
})

//update room
//http://localhost:8070/RoomBooking/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let roomBookingId = req.params.id;
    const {RoomType,NoOfPeople,CheckInDate,CheckOutDate,CurrentPrice} = req.body;
    const updateRoomBooking = {
        RoomType,
        NoOfPeople,
        CheckInDate,
        CheckOutDate,
        CurrentPrice,
        UserID
    }

    const update = await RoomBookingModel.findByIdAndUpdate(roomBookingId,updateRoomBooking).then(()=>{
        res.status(200).send({status: "Room booking Updated Successfully!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating room details!!"});
    })
})

//delete room
//http://localhost:8070/RoomBooking/delete/:id
router.route("/delete/:id").delete(async (req, res)=>{
    let roomBookingId = req.params.id;

    await RoomBookingModel.findByIdAndDelete(roomBookingId).then(()=>{
        res.status(200).send({status: "Room Booking deleted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one room
//http://localhost:8070/RoomBooking/get/:id
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    RoomBookingModel.findById(id).then((roombooking)=>{
        res.json(roombooking)
    }).catch((err)=>{
        console.log(err);
    })
})

//Update one room
//http://localhost:8070/RoomBooking/updateOne/:id
router.route("/updateOne/:id").put(async (req, res) => {
    let roombooking = await RoomBookingModel.findById(req.params.id);
    const data = {
        RoomType: req.body.RoomType || roombooking.RoomType,
        NoOfPeople: req.body.NoOfPeople || roombooking.NoOfPeople,
        CheckInDate: req.body.CheckInDate || roombooking.CheckInDate,
        CheckOutDate: req.body.CheckOutDate || roombooking.CheckOutDate,
        CurrentPrice: req.body.CurrentPrice || roombooking.CurrentPrice,
        UserID: req.body.UserID || roombooking.UserID

    };
    roombooking = await RoomBookingModel.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(roombooking);
});

//sort Rooms
router.get("/sort", async (req, res) =>{

    let query;
    const reqQuery = { ...req.query};
    const removeFields = ["sort"];
    removeFields.forEach(params => delete reqQuery[params]);

    let queryStr = JSON.stringify(reqQuery);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

    console.log(queryStr);
    try {

        const items = await RoomBookingModel.find(JSON.parse(queryStr));
        res.status(200).json({
            status: 'success',
            data: {
                items
            }
        });
    }catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });

    }});


module.exports = router;