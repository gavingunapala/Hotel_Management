import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import axios from "axios";
import img from '../Images/undraw_logic_n6th.png';

//customer
const CustomerRegistration = () => {
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [NICNumber, setNICNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

//customer
    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const AddressSetter = (e) => {
        setAddress(e.target.value);
    }
    const PhoneNumberSetter = (e) => {
        setPhoneNumber(e.target.value);
    }
    const NICNumberSetter = (e) => {
        setNICNumber(e.target.value);
    }
    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            Name: Name,
            Address: Address,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            Email: Email,
            Password: Password,
        };
        axios.post('http://localhost:8070/customer/add', newCustomer).then(() => {
            alert("Registered successfully!!!");
            history.push('/');
        }).catch((err) => {
            alert(err);
        })
    }


    return (
            <div>
                <div className="row">
                    <div className="col-sm-2"></div>
                        <div className=" col-sm-3">
                            <div><strong></strong><label></label></div>
                            <div className=" justify-content-center align-items-center">
                                <div>
                                    <form method="post" className="card">
                                            <br />
                                            <h2 className="text-center">Registration</h2>
                                            <br />
                                            <div className="container   ">
                                                <div><label>Enter Name</label><input className="form-control" type="text" onChange={NameSetter} />
                                                </div>
                                                <div className="form-group">
                                                    <div><label>Enter Address</label><input className="form-control" type="text" onChange={AddressSetter} />
                                                    </div>
                                                    <div><label>Enter Phone Number</label><input className="form-control"
                                                         type="Number" onChange={PhoneNumberSetter} /></div>
                                                    <div><label>Enter NIC Number</label><input className="form-control"
                                                                                                      type="text" onChange={NICNumberSetter} /></div>
                                                    <div><label>Enter Email</label><input className="form-control"
                                                                                                     type="text" onChange={EmailSetter} /></div>
                                                    <div><label>Enter Password</label><input className="form-control"
                                                                                          type="text" onChange={PasswordSetter} /></div>
                                                    <br/>
                                                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Register</button>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-6 image">
                            <img src={img} loading="auto" alt="center" height="600"
                                                                      width="500"/>
                        </div>
                </div>
            </div>
    )
}
export default CustomerRegistration;
