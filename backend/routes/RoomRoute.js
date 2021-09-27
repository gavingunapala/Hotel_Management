const router = require("express").Router();
const { request } = require("express");
let RoomModel = require("../models/RoomModel");

//add rooms
//http://localhost:8070/Room/add
router.route("/add").post((req,res)=>{
    const RoomType = req.body.RoomType;
    const avatar = req.body.avatar;
    const Sleeps = req.body.Sleeps;
    const CurrentPrice = req.body.CurrentPrice;
    const Facilities = req.body.Facilities;
    const Description = req.body.Description;

    const newRoom = new RoomModel({
        RoomType,
        avatar,
        Sleeps,
        CurrentPrice,
        Facilities,
        Description
    })

    newRoom.save().then(()=>{
        res.json("Room Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

//search rooms
//http://localhost:8070/Room/
router.route("/").get((req,res)=>{
    RoomModel.find().then((room)=>{
        res.json(room)
    }).catch((err)=>{
        console.log(err)
    })
})

//update room
//http://localhost:8070/Room/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let roomId = req.params.id;
    const {RoomType,avatar,Sleeps,CurrentPrice,Facilities,Description} = req.body;
    const updateRoom = {
        RoomType,
        avatar,
        Sleeps,
        CurrentPrice,
        Facilities,
        Description
    }

    const update = await RoomModel.findByIdAndUpdate(roomId,updateRoom).then(()=>{
        res.status(200).send({status: "Room Updated Successfully!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating room details!!"});
    })
})

//delete room
//http://localhost:8070/Room/delete/:id
router.route("/delete/:id").delete(async (req, res)=>{
    let roomId = req.params.id;

    await RoomModel.findByIdAndDelete(roomId).then(()=>{
        res.status(200).send({status: "Room deleted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find one room
//http://localhost:8070/Room/get/:id
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    RoomModel.findById(id).then((room)=>{
        res.json(room)
    }).catch((err)=>{
        console.log(err);
    })
})

//Update one room
//http://localhost:8070/Room/updateOne/:id
router.route("/updateOne/:id").put(async (req, res) => {
    let room = await RoomModel.findById(req.params.id);
    const data = {
        RoomType: req.body.RoomType || room.RoomType,
        avatar: req.body.avatar || room.avatar,
        Sleeps: req.body.Sleeps || room.Sleeps,
        CurrentPrice: req.body.CurrentPrice || room.CurrentPrice,
        Facilities: req.body.Facilities || room.Facilities,
        Description: req.body.Description || room.Description,

    };
    room = await RoomModel.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(room);
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

        const items = await RoomModel.find(JSON.parse(queryStr));
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