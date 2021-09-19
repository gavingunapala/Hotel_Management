import React, {useEffect, useState} from 'react';
import '../CSS/Employee/employee.css';
import axios from "axios";
import {Link} from "react-router-dom";
import jsPDF from "jspdf";


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
        // console.log(a)
        // console.log(b)
        // console.log(a*b/100);
        valueofcal =a*b/100
        calc = a +++ valueofcal;
    }
    // const genaratePDF =()=>{
    // let doc= new jsPDF('p','pt','A4');
    //     doc.text(30,30 , Employee.Name);
    //     doc.text(20,50 ,"your basic salary is "+ Employee.Salary);
    //     doc.text(20,70 ,"your bonus is "+ valueofcal);
    //     doc.text(20,90 ,`your Full salary is `+ calc);
    //
    //  doc.save("genarated.pdf");
    // }

const genaratePDF=()=>{
        let doc =new jsPDF('p','pt','a1');
        doc.html(document.querySelector('#body'),{
            callback:function (doc) {
                doc.save('abc.pdf');
            },
            margin:[60,60,60,60],
            x:32,
            y:32
        });

}

    return (
        <div className={'body'} >
        <div className={"container "}>
            <br />
            <div className="card-employee " id={'body'}>
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

                                <div><label>Bonus Percentage</label><input className="form-control" type="number" placeholder={'Enter Bonus Percentage'} onChange={BonusSetter}  /></div>
                                <br/>
                                <center>
                                    <button type="submit" className="btn " onClick={calculate(Employee.Salary,Bonus)}></button>
                                </center>
                                <div><label>Bonus</label><br/><input className="form-control" type="number" value={valueofcal}/></div><br/>
                                <div><label>Salary with bonus</label><input className="form-control" type="number" value={calc}/></div>
                            <br />
                            {/*<Link class="btn btn-success" role="button" id={"generate"}onClick={genaratePDF}>*/}
                            {/*    Genarate report for bonus .*/}
                            {/*    <em className="fa fa-file-pdf-o" id="icon"></em>*/}
                            {/*</Link>*/}
                              <br/>  <br/>  <br/>
                        </form>


                    </div>

                    <div className="col-sm-1"></div>

                </div>

            </div>
            <Link class="btn btn-success" role="button" id={"generate"}onClick={genaratePDF}>
                Genarate report for bonus .
                <em className="fa fa-file-pdf-o" id="icon"></em>
            </Link>
        </div>


        </div>
    )
}

export default EmployeeReport;