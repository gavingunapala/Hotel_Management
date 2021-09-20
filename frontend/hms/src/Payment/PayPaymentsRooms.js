import React,{useEffect, useState} from 'react';
import '../CSS/payment/payment.css';
import axios from "axios";


const PayPaymentsRooms = () => {

    const id ="6144f176789c4c0728b51885";
    let TotlePrice;
    // const price = 30000;


    // console.log(id);

    const [Roombooking, setRoomBooking] = useState([]);
    const [indate, setindate] = useState();
    const [outdate, setoutdate] = useState();
    const [Price, setprice] = useState();



    useEffect(() => {
        function getEmployee() {
            axios.get("http://localhost:8070/RoomBooking/get/"+ id).then((res) => {
                setRoomBooking(res.data);
                setindate(res.data.CheckInDate);
                setoutdate(res.data.CheckOutDate);
                setprice(res.data.CurrentPrice);
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
        TotlePrice = difference * Price;
        return TotlePrice;
    }




    // add to payment table
    // const[Id, setid] = useState('');
    const[Name, setName] = useState("");
    const[PhoneNumber, setPhoneNumber] = useState("");
    const[NICNumber, setNICNumber] = useState("");
    const[CardNumber, setCardNumber] = useState("");
    const[CVV, setCVV] = useState("");
    const[ExpierDate, setExpierDate] = useState("");
    const[Type, setType] = useState('Room');

    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const PhoneNumberSetter = (e) => {
        setPhoneNumber(e.target.value);
    }
    const NICNumberSetter = (e) => {
        setNICNumber(e.target.value);
    }
    const CardNumberSetter = (e) => {
        setCardNumber(e.target.value);
    }

    const CVVSetter = (e) => {
        setCVV(e.target.value);
    }
    const ExpierDateSetter = (e) => {
        setExpierDate(e.target.value);
    }



    const onSubmit = () => {

        const newpayment = {
            Id: id,
            Name: Name,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            CardNumber: CardNumber,
            CVV: CVV,
            ExpierDate: ExpierDate,
            TotlePrice: TotlePrice,
            Type: Type
        };
        axios.post('http://localhost:8070/Payment/add', newpayment).then(() => {
            alert("newpayment added");
            // history.push('/EmployeeView');
        }).catch((err) => {
            alert(err);
        })
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
                                    <div><label>Name On Credit Card</label><input class="form-control" type="text"onChange={NameSetter}/>
                                    </div>
                                    <div><label>Phone Number</label><br/><input class="form-control" type="number"onChange={PhoneNumberSetter}/></div>
                                    <div><label>NIC Number</label><input class="form-control" type="text"onChange={NICNumberSetter}/></div>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Card Number</label><br/><input className="form-control" type="number"onChange={CardNumberSetter}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <label>CVV Number</label><br/><input className="form-control" type="number"onChange={CVVSetter}/>
                                        </div>
                                    </div>
                                    <div><label>Expire Date</label><input class="form-control" type="date"onChange={ExpierDateSetter}/></div>
                                    <br/>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Totle price</label><br/><input className="form-control" type="number" value={calcTotle()}/>
                                        </div>
                                        <div className="col-sm-2 pad">
                                            <center><button type="button " className="btn btn-primary btn-pay" onClick={onSubmit}>Pay</button></center>
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