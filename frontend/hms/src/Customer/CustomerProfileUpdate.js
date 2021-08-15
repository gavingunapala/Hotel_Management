import React from 'react';
import img from '../Images/CustomerProfileUpdate.png';

const CustomerProfile = () => {
    return (
        <div>
            <br></br>
            <h2 className="text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update Profile </h2>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                {/*<h2 class="text-center">Student Registration</h2>*/}
                                <br />
                                <div className="container   ">
                                    {/*<div><label>Enter First Name</label><input class="form-control" type="text"/>*/}
                                    {/*</div>*/}
                                    <div class="form-group">
                                        <div><label>Name</label><input class="form-control" type="text"/>
                                        </div>
                                        <div><label>Address</label><input class="form-control"
                                                                          type="text"/></div>
                                        <div><label>Phone Number</label><input class="form-control"
                                                                               type="text"/></div>
                                        <div><label>NIC Number</label><input class="form-control"
                                                                             type="text"/></div>
                                        <div><label>Email</label><input className="form-control"
                                                                        type="text"/></div>
                                        <div><label>Password</label><input className="form-control"
                                                                           type="text"/></div>
                                        <br/>
                                         &nbsp;
                                        <button className="btn btn-warning" type="submit">&nbsp;Update</button>
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