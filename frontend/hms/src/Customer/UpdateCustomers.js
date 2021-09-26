import React,{useEffect, useState} from 'react';
import img from '../Images/UpdateCustomers.png';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

const CustomerProfile = ({match}) => {

    console.log(match.params.id);
    const id = match.params.id;

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
        function getCustomer() {
            axios.get("http://localhost:8070/customer/get/" + id).then((res) => {
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
        his.push('/AdminPanelCustomers');
        axios.put('http://localhost:8070/customer/updateOne/' + id, UpdateCustomer).then(() => {
            alert("Customer Updated successfully!!!");
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <br></br>
            <div className="col-12 col-sm-6 col-md-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/AdminPanelCustomers" className="btn btn-primary" role="button">
                     Back to Admin Panel
                </a>
            </div>
            <br></br>
            <h3 className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Customer </h3>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                <br />
                                <div className="container   ">
                                    <div class="form-group">
                                        <div><label>Name</label><input class="form-control" type="text" placeholder={Customer.Name} onChange={NameSetter} placeholder={Customer.Name}/>
                                        </div>
                                        <div><label>Address</label><input class="form-control"
                                                                          type="text" placeholder={Customer.Address} onChange={AddressSetter}/></div>
                                        <div><label>Phone Number</label><input class="form-control"
                                                                               type="text" placeholder={Customer.PhoneNumber} onChange={PhoneNumberSetter}/></div>
                                        <div><label>NIC Number</label><input class="form-control"
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