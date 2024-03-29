import React,{useEffect, useState} from 'react';
import img from '../Images/CustomerProfileUpdate.png';
import {useHistory} from "react-router-dom";
import axios from "axios";

const CustomerProfile = () => {

    let his = useHistory();
    const [Customer, setCustomer] = useState([]);
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [NICNumber, setNICNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    //get logged Customer
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        function getCustomer() {
            axios.get("http://localhost:8070/customer/get/" + loggedInUser).then((res) => {
                setCustomer(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }
        getCustomer();
    }, []);

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
    const onSubmit = () => {
        const UpdateCustomer = {
            Name: Name,
            Address: Address,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            Email: Email,
            Password: Password,
        };
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.put('http://localhost:8070/customer/updateOne/' + loggedInUser, UpdateCustomer).then(() => {
            alert("Updated successfully!!!");
        }).catch((err) => {
            alert(err);
        })
        his.push('/CustomerProfile');
    }

    return (
        <div>
            <br></br>
            <div className="col-12 col-sm-6 col-md-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/CustomerProfile" className="btn btn-primary" role="button">
                Back to Profile
            </a>
            </div>
            <br></br>
            <h2 className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Profile </h2>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                <div className="container   ">
                                    <div className="form-group">
                                        <div><label>Full Name</label><input className="form-control" type="text" onChange={NameSetter} placeholder={Customer.Name}/>
                                        </div>
                                        <div><label>Address</label><input className="form-control"
                                                                          type="text" placeholder={Customer.Address} onChange={AddressSetter}/></div>
                                        <div><label>Phone Number</label><input className="form-control"
                                                                               type="text" placeholder={Customer.PhoneNumber} onChange={PhoneNumberSetter}/></div>
                                        <div><label>NIC Number</label><input className="form-control"
                                                                             type="text" placeholder={Customer.NICNumber} onChange={NICNumberSetter}/></div>
                                        <div><label>Email</label><input className="form-control"
                                                                        type="text" placeholder={Customer.Email} onChange={EmailSetter}/></div>
                                        <div><label>Password</label><input className="form-control"
                                                                           type="text" placeholder={Customer.Password} onChange={PasswordSetter}/></div>
                                        <br/>
                                         &nbsp;
                                        <button className="btn btn-warning" type="submit" onClick={onSubmit}>&nbsp;Update</button>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={img} loading="auto" alt="center" height="500"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default CustomerProfile;