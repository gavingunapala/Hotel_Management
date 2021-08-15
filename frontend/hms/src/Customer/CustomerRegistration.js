import React from 'react';
import img from '../Images/undraw_logic_n6th.png';

const CustomerRegistration = () => {
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
                                            <h2 class="text-center">Registration</h2>
                                            <br />
                                            <div className="container   ">
                                                <div><label>Enter Name</label><input class="form-control" type="text"/>
                                                </div>
                                                <div class="form-group">
                                                    <div><label>Enter Address</label><input class="form-control" type="text"/>
                                                    </div>
                                                    <div><label>Enter Phone Number</label><input class="form-control"
                                                                                                type="text"/></div>
                                                    <div><label>Enter NIC Number</label><input class="form-control"
                                                                                                      type="text"/></div>
                                                    <div><label>Enter Email</label><input class="form-control"
                                                                                                     type="text"/></div>
                                                    <div><label>Enter Password</label><input className="form-control"
                                                                                          type="text"/></div>
                                                    <br/>
                                                    <button class="btn btn-primary" type="submit">&nbsp;Register</button>
                                                    <br />
                                                    <br />

                                                </div>
                                            </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-6 image">
                            <img src={img} loading="auto" alt="center" height="600"
                                                                      width="500"/>
                        </div>


                </div>
            </div>
    )
}
export default CustomerRegistration;
