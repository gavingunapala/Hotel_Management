import React,{useEffect, useState} from 'react';
import '../CSS/Employee/Update.css';
import {useHistory} from "react-router-dom";
import axios from "axios";

const AdminEmployeeUpdate = () => {
    const id ="611c9bc828933616582c7595";
    console.log(id)

    let his = useHistory();
    const [Employee, setEmployee] = useState([]);
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [NICNumber, setNICNumber] = useState("");
    const [Jobtitle, setJobtitle] = useState("");
    const [Salary, setSalary ]= useState("");

    //get logged Reviewer
    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getEmployee() {
            axios.get("http://localhost:8070/Employee/get/" + id).then((res) => {
                setEmployee(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getEmployee();
    }, []);



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
    const JobtitleSetter = (e) => {
        setJobtitle(e.target.value);
    }

    const SalarySetter = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = () => {
        const UpdateEmployee = {
            Name: Name,
            Address: Address,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            Jobtitle: Jobtitle,
            Salary: Salary
        };
        his.push('/Employee');
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);
        axios.put('http://localhost:8070/Employee/updateOne/' + id, UpdateEmployee).then(() => {

            alert("Updated successfully!!!");
        }).catch((err) => {
            alert(err);
        })
    }


    return (
        <div className={"bodyyy"}>
            <div className={"col-sm-4"} style={{marginLeft: '550px', marginTop: '100px'}} >
                    <div class=" justify-content-center align-items-center ">
                            <form method="post" class="cardUpdate">
                                <br />
                                <h2 class="text-center">Update Employee</h2>
                                <br />
                                <div className="container">
                                    <div><label>Full Name</label><input class="form-control" type="text" placeholder={Employee.Name}
                                                                        onChange={NameSetter}/>
                                    </div>

                                        <div><label>Address</label><br/><textarea class="form-control" id="Address" name="Address" width="100% "placeholder={Employee.Address}
                                                                                  onChange={AddressSetter}/>
                                        </div>
                                        <div><label>Phone Number</label><input class="form-control"
                                                                               type="number" placeholder={Employee.PhoneNumber} onChange={PhoneNumberSetter}/></div>
                                        <div><label>NIC Number</label><input class="form-control"
                                                                             type="text" placeholder={Employee.NICNumber} onChange={NICNumberSetter}/></div>
                                        <div><label>Job Title</label><input class="form-control"
                                                                            type="text" placeholder={Employee.Jobtitle} onChange={JobtitleSetter}/></div>
                                        <div><label>Salary</label><input className="form-control"
                                                                         type="text" placeholder={Employee.Salary} onChange={SalarySetter}/></div>
                                        <br/>

                                        <button class="btn btnwar btn-warning " type="submit" onClick={onSubmit}>UPDATE EMPLOYEE</button>
                                        <button class="btn-del btn btn-danger " type="submit">DELETE EMPLOYEE</button>
                                        <br/>  <br/>

                                </div>
                            </form>
            </div>
        </div>
        </div>
    )
}
export default AdminEmployeeUpdate;
