import React from 'react';
import img from '../Images/undraw_logic_n6th.png';

const CustomerRegistration = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-2 col-xl-1"></div>
                    <div class=" col-md-3 col-xl-3">

                        <div><strong></strong><label></label></div>

                        <div class=" justify-content-center align-items-center">
                            <div>
                                <form method="post" class="card">
                                    <br />
                                    <h2 class="text-center">Student Registration</h2>
                                    <br />
                                    <div className="container   ">
                                        <div><label>Enter First Name</label><input class="form-control" type="text"/>
                                        </div>
                                        <div class="form-group">
                                            <div><label>Enter Last Name</label><input class="form-control" type="text"/>
                                            </div>
                                            <div><label>Enter the Address</label><input class="form-control"
                                                                                        type="text"/></div>
                                            <div><label>Enter the Gaurdian Name</label><input class="form-control"
                                                                                              type="text"/></div>
                                            <div><label>Enter the Phone Number</label><input class="form-control"
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
                        <div className="col-md-2 col-xl-2 image"><img src={img} loading="auto" alt="center" height="500"
                                                                      width="600"/></div>


                </div>
            </div>

        </div>
    )
}
export default CustomerRegistration;
