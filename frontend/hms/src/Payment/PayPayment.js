import React,{useEffect, useState} from 'react';
import '../CSS/payment/payment.css';
import axios from "axios";
import {useHistory} from "react-router-dom";

const PayPayments = () => {
    const [Cart, setCart] = useState([]);
    var subTotal = useState(0);
    let his = useHistory();

    const loggedInUser = localStorage.getItem("user");

    useEffect(() => {
        const fetchData = async () => {
            try{
                let query = `?UserID[in]=${loggedInUser}`;

                const {data} = await axios({
                    method: "GET",
                    url: `http://localhost:8070/cart/sort${query}`,
                });
                setCart(data.data.items);
            }catch (error){
                console.log(error.response.data);

            }        };
        fetchData();

    }, []);

    console.log(Cart)
    const totPrice = (Price) =>{
        subTotal = parseInt(subTotal, 10) + parseInt(Price, 10);


    }

    {Cart.map((cart) => {
        return (
            <tr>
                {totPrice(cart.Quantity * cart.Price)}
                {console.log(subTotal)}
            </tr>
        );
    })}




    // add to payment table
    const[Id, setid] = useState(loggedInUser);
    const[Name, setName] = useState("");
    const[PhoneNumber, setPhoneNumber] = useState("");
    const[NICNumber, setNICNumber] = useState("");
    const[CardNumber, setCardNumber] = useState("");
    const[CVV, setCVV] = useState("");
    const[ExpierDate, setExpierDate] = useState("");
    const[Type, setType] = useState('Food');

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



    const onSubmit = (e) => {
        e.preventDefault()

        const newpayment = {
            Id: Id,
            Name: Name,
            PhoneNumber: PhoneNumber,
            NICNumber: NICNumber,
            CardNumber: CardNumber,
            CVV: CVV,
            ExpierDate: ExpierDate,
            TotlePrice: subTotal,
            Type: Type
        };
        axios.post('http://localhost:8070/Payment/add', newpayment).then(() => {
            alert("newpayment added");
            deleteFood(loggedInUser);
            his.push('/customerViewFood');
        }).catch((err) => {
            alert(err);
        });


    }


    const deleteFood = (id) =>{
        console.log(id);
        axios.delete('http://localhost:8070/cart/deleteSorted/'+ id).then(()=>{
        }).catch((err)=>{
            alert(err);
        })
    };

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
                                    <div><label>Name On Credit Card</label><input class="form-control" type="text" onChange={NameSetter}/>
                                    </div>
                                        <div><label>Phone Number</label><br/><input class="form-control" type="number" onChange={PhoneNumberSetter}/></div>
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
                                                <label>Totle price</label><br/><input className="form-control" type="number" value={subTotal}/>
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
                </div>
            </div>
        </div>
    )
}
export default PayPayments;
