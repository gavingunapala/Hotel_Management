import React from 'react';
import img from '../Images/undraw_logic_n6th.png';
import '../CSS/payment/payment.css';

const PayPayments = () => {
    return (
        <div className={'background-image'}>
            <div className="row1">
                <div className="col-sm-2"></div>
                <div class=" col-sm-4">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                <h2 class="text-center">Payment</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Name On Credit Card</label><input class="form-control" type="text"/>
                                    </div>
                                        <div><label>Phone Number</label><br/><input class="form-control" type="number"/></div>
                                        <div><label>NIC Number</label><input class="form-control" type="text"/></div>
                                        <div><label>Phone Number</label><br/><input className="form-control" type="number"/></div>
                                        <div className={"row"}>
                                            <div className="col-sm-7">
                                                <label>Card Number</label><br/><input className="form-control" type="number"/>
                                            </div>
                                            <div className="col-sm-4">
                                                <label>CVV Number</label><br/><input className="form-control" type="number"/>
                                            </div>
                                        </div>
                                        <div><label>Expire Date</label><input class="form-control" type="date"/></div>
                                        <br/>
                                        <div className={"row"}>
                                            <div className="col-sm-7">
                                                <label>Totle price</label><br/><input className="form-control" type="number" />
                                            </div>
                                                <div className="col-sm-2 pad">
                                                   <center><button type="button " className="btn btn-primary btn-pay">Pay</button></center>
                                                </div>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 image">
                    {/*<img src={img} loading="auto" alt="center" height="500"*/}
                    {/*     width="600"/>*/}
                </div>


            </div>
        </div>
    )
}
export default PayPayments;