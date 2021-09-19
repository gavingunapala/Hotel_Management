import React,{useEffect, useState} from 'react';
import '../CSS/payment/payment.css';
import axios from "axios";


const PayPaymentsRooms = () => {

    const id ="6144f176789c4c0728b51885";
    let TotlePrice;
    const price = 30000;


    // console.log(id);

    const [Roombooking, setRoomBooking] = useState([]);
    const [indate, setindate] = useState();
    const [outdate, setoutdate] = useState();



    useEffect(() => {
        function getEmployee() {
            axios.get("http://localhost:8070/RoomBooking/get/"+ id).then((res) => {
                setRoomBooking(res.data);
                setindate(res.data.CheckInDate);
                setoutdate(res.data.CheckOutDate);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getEmployee();
    }, []);


//calc total date

    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
// a and b are javascript Date objects
    function dateDiffInDays() {
        console.log(indate);
        console.log(outdate);
        var idate= new Date(indate);
        var odate= new Date(outdate);
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(idate.getFullYear(), idate.getMonth(), idate.getDate());
        const utc2 = Date.UTC(odate.getFullYear(), odate.getMonth(), odate.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
// test it
       let difference = dateDiffInDays();

console.log(difference)

//calc total price
    function calcTotle() {
        TotlePrice = difference * price;
        return TotlePrice;
    }


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
                                            <label>Totle price</label><br/><input className="form-control" type="number" value={calcTotle()}/>
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
export default PayPaymentsRooms;