import React, {useEffect, useState} from 'react';
import '../CSS/Employee/employee.css';
import axios from "axios";
import {Link} from "react-router-dom";



const EmployeeReport = () => {
    const id = '611f3d814fa93940d035a83e';
    let valueofcal;
    let calc;

    // console.log(id)
    const [Employee, setEmployee] = useState([]);
    const [Bonus, setBonus] = useState("");
    const [Bonus1, setBonus1] = useState(0);
    const [Bonus2, setBonus2] = useState(0);



    //get logged Reviewer
    useEffect(() => {
        // e.preventDefault;
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getEmployee() {
            axios.get("http://localhost:8070/Employee/get/"+ id).then((res) => {
                setEmployee(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getEmployee();
    }, [id]);
    const BonusSetter = (e) => {
        setBonus(e.target.value);
    }

    const calculate =(a,b)=>{
        // console.log(a*b/100);
        valueofcal =a*b/100
        calc = a +++ valueofcal;
    }

    return (
        <div className={'body'}>
        <div className={"container "}>
            <br />
            <div className="card-employee ">
            <h1 className="text-center">Bonus Report</h1>
                <br/>
                <div className="row1">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-4">
                      <form method="post" className="card-employee-inner">
                          <br/>
                          <h2 className="text-center">Employee Details</h2>
                          <br/>
                          <div className="container   ">
                              <div><label>Full Name</label><input className="form-control" type="text" value={Employee.Name}/></div>
                                    <div><label>Phone Number</label><input className="form-control" type="number" value={Employee.PhoneNumber}/></div>
                                    <div><label>NIC Number</label><input className="form-control" type="text" value={Employee.NICNumber}/></div>
                                    <div><label>Job Title</label><input className="form-control" type="text"value={Employee.Jobtitle}/></div>
                                    <div><label>Salary</label><input className="form-control" type="text" value={Employee.Salary}/></div>
                                    <br/>
                                    <br/>
                          </div>
                      </form>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <form method="post" className="card-employee-inner">
                            <br/>
                            <h2 className="text-center">Generate bonus</h2>
                            <br/>

                                <div><label>Enter Bonus Percentage</label><input className="form-control" type="number" onChange={BonusSetter}  /></div>
                                <br/>
                                <center>
                                    <button type="submit" className="btn btn-primary" onClick={calculate(Employee.Salary,Bonus)}>Pay</button>
                                </center>
                                <div><label>Bonus</label><br/><input className="form-control" type="number" value={valueofcal}/></div><br/>
                                <div><label>Salary with bonus</label><input className="form-control" type="number" value={calc}/></div>
                            <br />
                            <Link class="btn btn-success" role="button" to={``}>
                                Genarate report for bonus .
                                <em className="fa fa-file-pdf-o" id="icon"></em>
                            </Link>
                              <br/>  <br/>  <br/>
                        </form>

                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default EmployeeReport;