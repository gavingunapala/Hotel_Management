import React, {useState, useEffect} from "react";
import axios from "axios";
import img from '../Images/CustomerProfile.png';
import {useHistory} from "react-router-dom";

const CustomerProfile = () => {

    // const id ="611d45fbee6c741e4c0d4e83";
    // console.log(id)
    // let his = useHistory();
    // const [Customer, setCustomer] = useState([]);

    // // get logged Customer
    // useEffect(() => {
    //     // const loggedInUser = localStorage.getItem("user");
    //     // console.log(loggedInUser);
    //
    //     function getCustomer() {
    //         axios.get("http://localhost:8070/customer/get/" + id).then((res) => {
    //             setCustomer(res.data);
    //             console.log(res.data);
    //         }).catch((err) => {
    //         })
    //     }
    //
    //     getCustomer();
    // }, []);
    //
    // function deleteCustomer() {
    //     // const loggedInUser = localStorage.getItem("user");
    //     // console.log(loggedInUser);
    //     axios.delete('http://localhost:8070/customer/delete/' + id).then(() => {
    //         localStorage.clear();
    //         his.push('/Login');
    //     }).catch((err) => {
    //         alert(err);
    //     })
    // }

    const [Customer, setCustomer] = useState([]);
    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

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

    function deleteCustomer() {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        axios.delete('http://localhost:8070/customer/delete/' + loggedInUser).then(() => {
            localStorage.clear();
            history.push('/login');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <br></br>
            <h2 className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Hello {Customer.Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={Logout} className="btn btn-success form-btn" type="submit">Logout
                </button></h2>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form method="post" className="card">
                                <br />
                                {/*<h2 class="text-center">Student Registration</h2>*/}
                                <br />
                                <div className="container   ">
                                    {/*<div><label>Enter First Name</label><input class="form-control" type="text"/>*/}
                                    {/*</div>*/}
                                    <div className="form-group">
                                        <div><label>Name</label><input className="form-control" type="text" placeholder={Customer.Name}/>
                                        </div>
                                        <div><label>Address</label><input className="form-control"
                                                                                    type="text" placeholder={Customer.Address}/></div>
                                        <div><label>PhoneNumber</label><input className="form-control"
                                                                                          type="text" placeholder={Customer.PhoneNumber}/></div>
                                        <div><label>NICNumber</label><input className="form-control"
                                                                                         type="text" placeholder={Customer.NICNumber}/></div>
                                        <div><label>Email</label><input className="form-control"
                                                                             type="text" placeholder={Customer.Email}/></div>
                                        <div><label>Password</label><input className="form-control"
                                                                             type="text" placeholder={Customer.Password}/></div>
                                        <br/>
                                        <button className="btn btn-danger" type="reset" onClick={() => {
                                            if (window.confirm("Are you sure you want to delete your Profile?")) {
                                                deleteCustomer()
                                            }
                                            ;
                                        }}>&nbsp;Delete</button>&nbsp;&nbsp;
                                        <a href={"/CustomerProfileUpdate"} className="btn btn-warning" type="reset">&nbsp;Update</a>
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