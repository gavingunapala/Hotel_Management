const router = require("express").Router();
const { request } = require("express");
let Food = require("../models/FoodModel");

//add data to food table
//./food/add
//Post request
//http://localhost:8070/food/add
router.route("/add").post((req,res)=>{
    const Code = req.body.Code;
    const Image = req.body.Image;
    const Name = req.body.Name;
    const Price = req.body.Price;

    const newFood = new Food({
        Code,
        Image,
        Name,
        Price
    })

    newFood.save().then(()=>{
        res.json("Food Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search food
//http://localhost:8070/food/
//Get Request
router.route("/").get((req,res)=>{
    Food.find().then((food)=>{
        res.json(food)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8070/food/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let foodId = req.params.id;
    const {Code,Image,Name,Price} = req.body;
    const updateFood = {
        Code,
        Image,
        Name,
        Price
    }

    const update = await Food.findByIdAndUpdate(foodId,updateFood).then(()=>{
        res.status(200).send({status: "Food Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete food
//http://localhost:8070/food/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let foodId = req.params.id;

    await Food.findByIdAndDelete(foodId).then(()=>{
        res.status(200).send({status: "Food deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find a food
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Food.findById(id).then((food)=>{
        res.json(food)
    }).catch((err)=>{
        console.log(err);
    })
})

//Update one field only
router.route("/updateOne/:id").put(async (req, res) => {
    let food = await Food.findById(req.params.id);
    const data = {
        Code: req.body.Code || food.Code,
        Image: req.body.Image || food.Image,
        Name: req.body.Name || food.Name,
        Price: req.body.Price || food.Price,
    };
    food = await Food.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(food);
});



module.exports = router;
