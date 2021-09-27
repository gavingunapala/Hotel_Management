const router = require("express").Router();
const { request } = require("express");
let Cart = require("../models/CartModel");

//add data to cart table
//./cart/add
//Post request
//http://localhost:8070/cart/add
router.route("/add").post((req,res)=>{
    const UserID = req.body.UserID;
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Quantity = req.body.Quantity;

    const newCart = new Cart({
        UserID,
        Name,
        Price,
        Quantity
    })

    newCart.save().then(()=>{
        res.json("Cart item added")
    }).catch((err)=>{
        console.log(err);
    })
})

//search cart items
//http://localhost:8070/cart/
//Get Request
router.route("/").get((req,res)=>{
    Cart.find().then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
//http://localhost:8070/cart/update/:id
//Put Request
router.route("/update/:id").put(async (req,res)=>{
    let cartId = req.params.id;
    const {UserID,Name,Price,Quantity} = req.body;
    const updateCart = {
        UserID,
        Name,
        Price,
        Quantity
    }

    const update = await Cart.findByIdAndUpdate(cartId,updateCart).then(()=>{
        res.status(200).send({status: "Cart Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete cart item
//http://localhost:8070/cart/delete/:id
//Delete Request
router.route("/delete/:id").delete(async (req, res)=>{
    let cartId = req.params.id;

    await Cart.findByIdAndDelete(cartId).then(()=>{
        res.status(200).send({status: "Cart item deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//find a cart item
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Cart.findById(id).then((cart)=>{
        res.json(cart)
    }).catch((err)=>{
        console.log(err);
    })
})

//sort cart items
router.get("/sort", async (req, res) =>{

    let query;
    const reqQuery = { ...req.query};
    const removeFields = ["sort"];
    removeFields.forEach(params => delete reqQuery[params]);

    let queryStr = JSON.stringify(reqQuery);

    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

    console.log(queryStr);
    try {

        const items = await Cart.find(JSON.parse(queryStr));
        res.status(200).json({
            status: 'success',
            // results: items.length,
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

//sort delete items
router.route("/deleteSorted/:id").delete(async (req, res)=>{
    let cartId = req.params.id;

    await Cart.deleteMany({UserID: cartId}).then(()=>{
        res.status(200).send({status: "Cart item deleted"});
    }).catch((err)=>{
        console.log(err);
    })
});





//Update one field only
router.route("/updateOne/:id").put(async (req, res) => {
    let cart = await Cart.findById(req.params.id);
    const data = {
        UserID: req.body.UserID || food.UserID,
        Name: req.body.Name || food.Name,
        Price: req.body.Price || food.Price,
        Quantity: req.body.Quantity || food.Quantity,
    };
    cart = await Cart.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(cart);
});



module.exports = router;
