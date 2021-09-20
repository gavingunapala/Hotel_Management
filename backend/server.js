const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

//database link
const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 8070;
//create mongo configurations

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const connectio = mongoose.connection;
connectio.once("open",()=>{
    console.log("mongoDB connection successful !!!");
})

//Customer
const customerRouter = require("./routes/CustomerRoute.js");
app.use("/customer",customerRouter);
//Food
const foodRouter = require("./routes/FoodRoute.js");
app.use("/food",foodRouter);
//Cart
const cartRouter = require("./routes/CartRoute.js");
app.use("/cart",cartRouter);
//Employee
const EmployeeRouter = require("./routes/EmployeeRoute.js");
app.use("/Employee",EmployeeRouter);
//Rooms
const RoomRouter = require("./routes/RoomRoute.js");
app.use("/Room",RoomRouter);
//BookRooms
const RoomBookingRouter = require("./routes/RoomBookingRoute");
app.use("/RoomBooking",RoomBookingRouter);
//Payment
const PaymentRouter = require("./routes/PaymentRoute.js");
app.use("/Payment",PaymentRouter);


//run the app using port
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);

})
