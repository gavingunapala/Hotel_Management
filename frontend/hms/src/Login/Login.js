import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import axios from "axios";
// import img from '../Images/undraw_logic_n6th.png';
import '../../src/CSS/Login/Login1.css'

const Login = () => {
    return (
        <div>
            <div id="login-one" className="login-one">
                <form className="login-one-form">
                    <div className="col">
                        <div className="login-one-ico"><i className="fa fa-unlock-alt" id="lockico"></i></div>
                        <div className="form-group mb-3">
                            <div>
                                <h3 id="heading"><center>Log in</center></h3>
                            </div>
                            <div><label><b>Email</b></label>
                            </div>
                            <input className="form-control" type="text" id="input" placeholder=" "/>
                            <div><label><b>Password</b></label>
                            </div>
                            <input className="form-control" type="password" id="input" placeholder=" "/>
                                <button className="btn btn-primary" id="button" type="submit">Log in</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;