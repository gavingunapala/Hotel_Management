import React from "react"
import '../../src/CSS/Login/Login1.css'

function Logout  () {
    localStorage.clear();
};

function UserGreeting() {
    return (
        <div>
        <a href="/Login" className="btn qtyAdd loginButton" onClick={Logout}>Logout</a>
        <a href="/CustomerProfile" className="btn qtyAdd profileButton" >View Profile</a>
        </div>);
}

function GuestGreeting() {
    return (<a href="/Login" className="qtyAdd loginButton">Login</a>);
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}


export default Greeting;
