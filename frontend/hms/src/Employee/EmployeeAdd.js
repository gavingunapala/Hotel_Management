import React from 'react';
import img from '../Images/gift.png';

const EmployeeAdd = () => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                <h2 class="text-center">Add Employee</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Full Name</label><input class="form-control" type="text"/>
                                    </div>
                                    <div class="form-group">
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
                                        <br/><center>
                                        <button class="btn btn-primary " type="submit">ADD EMPLOYEE</button></center>
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
                         width="600"/>
                </div>


            </div>
        </div>
    )
}
export default EmployeeAdd;