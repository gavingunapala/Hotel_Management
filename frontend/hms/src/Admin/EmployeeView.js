import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import AdminSideNav from "./AdminSideNav";
import '../CSS/Admin/tableEmployee.css';
import Search from "../Common/Search";


const EmployeeView = () => {


    let his = useHistory();
    const [Employee, setEmployee] = useState([]);


    //get logged Reviewer
    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getEmployee() {
            axios.get("http://localhost:8070/Employee" ).then((res) => {
                setEmployee(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getEmployee();
    }, [Employee]);
    const deleteRoom = (id) =>{
        axios.delete('http://localhost:8070/Employee/delete/' + id).then(()=>{
            alert("Employee details deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };





    return (
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-10"> <br/>
                    <Search/>
                    <div className="">
                        <div className="row1">

                            <div className="col-12 col-sm-6 col-md-6">
                            </div>
                            <span className="counter pull-right"></span>
                            <br/><br/>
                        </div>


                            <a href="/EmployeeAdd" className="btn btn-primary" role="button">
                                <i className="fa fa-plus"></i>Add New Employee
                            </a>
                                    <button className="btn btn-success btngena" type="submit" >Generate Report</button>


                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center col-lg-4">Address</th>
                                            <th className="text-center">Phone number</th>
                                            <th className="text-center">Nic Number</th>
                                            <th className="text-center">Job Title</th>
                                            <th className="text-center">Salary</th>
                                            <th className="text-center">Actions</th>

                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {Employee.map((employee) => {
                                            return (
                                                <tr>
                                                    <td>{employee.Name}</td>
                                                    <td>{employee.Address}</td>
                                                    <td>{employee.PhoneNumber}</td>
                                                    <td>{employee.NICNumber}</td>
                                                    <td>{employee.Jobtitle}</td>
                                                    <td>{employee.Salary}</td>
                                                    <br />
                                                    <Link class="btn btn-success" role="button" to={`AdminEmployeeUpdate/${employee._id}`}>
                                                        <em className="fa fa-edit" id="icon"></em>
                                                    </Link>
                                                    <a className="btn btn-danger" id="icon">
                                                        <em className="fa fa-trash"
                                                            onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete this Room?")) {
                                                                    deleteRoom(employee._id)
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
export default EmployeeView;
