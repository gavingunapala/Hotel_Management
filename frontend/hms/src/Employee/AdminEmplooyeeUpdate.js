import React from 'react';
import '../CSS/Employee/Update.css';

const AdminEmployeeUpdate = () => {
    return (
        <div className={"bodyyy"}>
            <div className={"col-sm-4"} style={{marginLeft: '550px', marginTop: '100px'}} >
                    <div class=" justify-content-center align-items-center ">
                            <form method="post" class="cardUpdate">
                                <br />
                                <h2 class="text-center">Update Employee</h2>
                                <br />
                                <div className="container">
                                    <div><label>Full Name</label><input class="form-control" type="text"/>
                                    </div>

                                        <div><label>Address</label><br/><textarea class="form-control" id="Address" name="Address" width="100% "/>
                                        </div>
                                        <div><label>Phone Number</label><input class="form-control"
                                                                               type="number"/></div>
                                        <div><label>NIC Number</label><input class="form-control"
                                                                             type="text"/></div>
                                        <div><label>Job Title</label><input class="form-control"
                                                                            type="text"/></div>
                                        <div><label>Salary</label><input className="form-control"
                                                                         type="text"/></div>
                                        <br/>

                                        <button class="btn btnwar btn-warning " type="submit">UPDATE EMPLOYEE</button>
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
