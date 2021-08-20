import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

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
        <div>
            <div>
                <br/><br/>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-6 col-md-6">
                            <a href="/EmployeeAdd" className="btn btn-primary" role="button">
                                <i className="fa fa-plus"></i>Add New Employee
                            </a>
                        </div>
                        <div className="form-group pull-right col-lg-4">
                            <input type="text" id='search' className="search form-control"
                                   placeholder="Search by typing here.."/>
                        </div>
                        <span className="counter pull-right"></span>
                        <br/> <br/><br/>
                    </div>
                    <div className="card" id="TableSorterCard">
                        <div className="card-header">
                            <div className="form-group pull-right col-lg-4">
                                <button className="btn btn-primary" type="submit" id="fa">Generate Report</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table  table-hover table-bordered table-striped table tablesorter"
                                       id="ipi-table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <th className="text-center col-lg-4">Address</th>
                                        <th className="text-center">Phone number</th>
                                        <th className="text-center">Nic Number</th>
                                        <th className="text-center">Job Title</th>
                                        <th className="text-center">Salary</th>
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

                                                <Link class="btn btn-primary" role="button" to={`AdminEmployeeUpdate/${employee._id}`}>
                                                    <em className="fa fa-eye" id="icon"></em>
                                                </Link>
                                                <Link class="btn btn-success" role="button" to={`/update/${employee._id}`}>
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
                </div>
            </div>
        </div>
    )
}
export default EmployeeView;
