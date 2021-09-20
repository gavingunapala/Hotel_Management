import './App.css';
import React from "react";


import {BrowserRouter as Router, Route} from "react-router-dom"
import CustomerRegistration from "./Customer/CustomerRegistration";
import EmployeeAdd from "./Employee/EmployeeAdd";
import AdminEmployeeUpdate from "./Employee/AdminEmplooyeeUpdate";
import PayPayments from "./Payment/PayPayment";
import Home from "./Common/Home";
import AddFood from "./Food/AddFood";
import CustomerProfile from "./Customer/CustomerProfile";
import CustomerProfileUpdate from "./Customer/CustomerProfileUpdate";
import UpdateCustomers from "./Customer/UpdateCustomers";
import EmployeeReport from "./Employee/EmployeeReport";
import AddRooms from "./Room_Management/AddRooms";
import ViewRooms from "./Room_Management/ViewRooms";
import UpdateRooms from "./Room_Management/UpdateRooms";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

import ManageRoomsDashboard from "./Room_Management/ManageRoomsDashboard";
import CustomerViewFood from "./Food/CustomerViewFood";
import EmployeeView from "./Admin/EmployeeView";
import AdminSideNav from "./Admin/AdminSideNav";
import FoodManagement from "./Food/FoodManagement";
import UpdateFood from "./Food/UpdateFood";
import AdminPanelCustomers from "./Admin/AdminPanlCustomers";
import BookRooms from "./RoomBookingManagement/BookRooms";
import ViewBookedRooms from "./RoomBookingManagement/ViewBookedRooms";
import UpdateBookedRooms from "./RoomBookingManagement/UpdateBookedRooms";
import RoomBookingDashboard from "./RoomBookingManagement/RoomBookingDashboard";
import ViewAllRooms from "./RoomBookingManagement/ViewAllRooms";
import ViewOneRoom from "./RoomBookingManagement/ViewOneRoom"
import CustomerReport from "./Customer/CustomerReport";
import PayPaymentsRooms from "./Payment/PayPaymentsRooms";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import PaymentView from "./Payment/ViewAllPayment";











function App() {
  return (


      <div>
        <Router>
          <div className="App" />
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/addFood" component={AddFood}/>
            <Route exact path="/customerViewFood" component={CustomerViewFood}/>
            <Route exact path="/foodManagement" component={FoodManagement}/>
            <Route exact path="/updateFood/:id" component={UpdateFood}/>
            <Route exact path="/shoppingCart" component={ShoppingCart}/>

          <Route path="/a" component={CustomerRegistration}/>


            <Route path="/EmployeeAdd" component={EmployeeAdd}/>
            <Route path="/AdminEmployeeUpdate/:id" component={AdminEmployeeUpdate}/>
          <Route path="/EmployeeReport" component={EmployeeReport}/>



            <Route path="/PayPayments" component={PayPayments}/>
          <Route path="/CustomerReport" component={CustomerReport}/>
          <Route exact path="/PayPaymentsRooms" component={PayPaymentsRooms}/>

            <Route path="/CustomerProfile" component={CustomerProfile}/>
          <Route path="/CustomerProfileUpdate" component={CustomerProfileUpdate}/>
          <Route path="/CustomerRegistration" component={CustomerRegistration}/>
          <Route path="/UpdateCustomers/:id" component={UpdateCustomers}/>
            <Route path="/Login" component={Login}/>
          <Route path="/AdminPanelCustomers" component={AdminPanelCustomers}/>

          <Route exact path="/AddRooms" component={AddRooms}/>
          <Route exact path="/ViewRooms/:id" component={ViewRooms}/>
          <Route exact path="/UpdateRooms/:id" component={UpdateRooms}/>
          <Route exact path="/ManageRoomsDashboard" component={ManageRoomsDashboard}/>
          <Route exact path="/EmployeeView" component={EmployeeView}/>
          <Route exact path="/AdminSideNav" component={AdminSideNav}/>
          <Route exact path="/BookRooms" component={BookRooms}/>
          <Route exact path="/ViewBookedRooms/:id" component={ViewBookedRooms}/>
          <Route exact path="/UpdateBookedRooms/:id" component={UpdateBookedRooms}/>
          <Route exact path="/RoomBookingDashboard" component={RoomBookingDashboard}/>
          <Route exact path="/ViewAllRooms" component={ViewAllRooms}/>
          <Route exact path="/ViewOneRoom/:id" component={ViewOneRoom}/>
          <Route exact path="/PaymentView" component={PaymentView}/>



      </Router>
        <Footer/>
</div>
);
}


export default App;




