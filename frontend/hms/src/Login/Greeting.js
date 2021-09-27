import React from "react"
import '../../src/CSS/Login/Login1.css'

function Logout  () {
    localStorage.clear();
};

function UserGreeting() {
    return (<a href="/Login" className="btn qtyAdd loginButton" onClick={Logout}>Logout</a>);
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
