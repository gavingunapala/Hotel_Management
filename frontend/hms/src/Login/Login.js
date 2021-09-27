import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import axios from "axios";
import '../../src/CSS/Login/Login1.css'

const Login = () => {

    const history = useHistory();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (Email == "admin@gmail.com" && Password == "123") {
            history.push('/AdminPanelCustomers');
        } else {
            const newCustomer = {
                Email: Email,
                Password: Password
            };
            axios.post('http://localhost:8070/customer/login', newCustomer).then((res) => {
                history.push('/CustomerProfile');
                localStorage.setItem('user', res.data._id);
            }).catch((err) => {
                alert(err);
            })
        }
    }

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
                            <input className="form-control" type="text" id="input" placeholder=" " onChange={EmailSetter}/><br></br>
                            <div><label><b>Password</b></label>
                            </div>
                            <input className="form-control" type="password" id="input" placeholder=" " onChange={PasswordSetter} /><br></br>
                            <button className="btn btn-primary" id="button" type="submit"  onClick={onSubmit} >Log in</button>
                            <a href={"/CustomerRegistration"} type="submit" id={"signupbutton"}><center><b><u>Sign Up</ u></b></center></a><br />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;

