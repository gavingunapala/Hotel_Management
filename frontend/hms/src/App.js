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

          <Route path="/a" component={CustomerRegistration}/>


            <Route path="/EmployeeAdd" component={EmployeeAdd}/>
            <Route path="/AdminEmployeeUpdate/:id" component={AdminEmployeeUpdate}/>
          <Route path="/EmployeeReport" component={EmployeeReport}/>



            <Route path="/PayPayments" component={PayPayments}/>

            <Route path="/CustomerProfile" component={CustomerProfile}/>
          <Route path="/CustomerProfileUpdate" component={CustomerProfileUpdate}/>
          <Route path="/CustomerRegistration" component={CustomerRegistration}/>
          <Route path="/UpdateCustomers" component={UpdateCustomers}/>
            <Route path="/Login" component={Login}/>

          <Route exact path="/AddRooms" component={AddRooms}/>
          <Route exact path="/ViewRooms" component={ViewRooms}/>
          <Route exact path="/UpdateRooms" component={UpdateRooms}/>
          <Route exact path="/ManageRoomsDashboard" component={ManageRoomsDashboard}/>
          <Route exact path="/EmployeeView" component={EmployeeView}/>
          <Route exact path="/AdminSideNav" component={AdminSideNav}/>


      </Router>
        <Footer/>
</div>
);
}


export default App;




