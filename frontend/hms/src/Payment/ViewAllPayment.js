import React,{useEffect, useState} from 'react';
// import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import '../CSS/Admin/tableEmployee.css';
import AdminSideNav from "../Admin/AdminSideNav";



const PaymentView = () => {


    // let his = useHistory();
    const [payment, setpayment] = useState([]);
    const [SearchWord, setSearchWord] = useState('');



    //get logged Reviewer
    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getpayment() {
            axios.get("http://localhost:8070/Payment" ).then((res) => {
                setpayment(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getpayment();
    }, [payment]);
    const deletepayment = (id) =>{
        axios.delete('http://localhost:8070/payment/delete/' + id).then(()=>{
            alert("payment details deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };





    return (
        <div className="row1">
            <div className="col-2"> <AdminSideNav/></div>
            <div className="col-10"> <br/>
                {/*<Search/>*/}
                <div className="col-xs-6">
                    <div className="searchBar">
                        <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER" onChange={event =>{setSearchWord(event.target.value)}}/>
                    </div>
                </div>
                {/*end*/}
                <div className="">
                    <div className="row1">

                        <div className="col-12 col-sm-6 col-md-6">
                        </div>
                        <span className="counter pull-right"></span>
                        <br/><br/>
                    </div>

                    <br /><br />
                    <div className="row1">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                       id="ipi-table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">ID</th>
                                        <th className="text-center col-lg-4">Name</th>
                                        <th className="text-center">Phone number</th>
                                        <th className="text-center">Nic Number</th>
                                        <th className="text-center">Card Number</th>
                                        <th className="text-center">Cvv</th>
                                        <th className="text-center">EX date</th>
                                        <th className="text-center">Total price</th>
                                        <th className="text-center">Type</th>

                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {payment.filter((val)=>{
                                        if(SearchWord ==""){
                                            return val
                                        }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.Type.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                            return val
                                        }
                                    }).map((payment) => {
                                        return (
                                            <tr>
                                                <td>{payment.Id}</td>
                                                <td>{payment.Name}</td>
                                                <td>{payment.PhoneNumber}</td>
                                                <td>{payment.NICNumber}</td>
                                                <td>{payment.CardNumber}</td>
                                                <td>{payment.CVV}</td>
                                                <td>{payment.ExpierDate.split('T')[0]}</td>
                                                <td>{payment.TotlePrice}</td>
                                                <td>{payment.Type}</td>
                                                <br />
                                                <a className="btn btn-danger" id="icon">
                                                    <em className="fa fa-trash"
                                                        onClick={() => {
                                                            if (window.confirm("Are you sure you want to delete this Room?")) {
                                                                deletepayment(payment._id)
                                                            }
                                                            ;
                                                        }}/></a>
                                                <br /><br />
                                            </tr>
                                        );
                                    })}

                                    </tbody>
                                </table>
                                {/*<button className="btn btn-primary">*/}
                                {/*    <Link to="/">+ Back to Home</Link>*/}
                                {/*</button>*/}
                                <div className="col-12 col-sm-6 col-md-6">
                                    <a href="/" className="btn btn-primary" role="button">
                                        <i className="fa fa-plus"></i>Back to Home
                                    </a>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div></div>

        </div>
    )
}
export default PaymentView;
