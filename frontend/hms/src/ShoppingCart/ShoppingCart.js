import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import Greeting from "../Login/Greeting";

const ShoppingCart = () => {

    let his = useHistory();
    const [Cart, setCart] = useState([]);
    var subTotal = useState(0);
    const loggedInUser = localStorage.getItem("user");
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        if (loggedInUser != null) {
            setIsLoggedIn(true);
        }
        const fetchData = async () => {
            try {
                let query = `?UserID[in]=${loggedInUser}`;

                const {data} = await axios({
                    method: "GET",
                    url: `http://localhost:8070/cart/sort${query}`,
                });
                setCart(data.data.items);
            } catch (error) {
                console.log(error.response.data);

            }
        };
        fetchData();
    }, [Cart]);


    const deleteFood = (id) => {
        axios.delete('http://localhost:8070/cart/delete/' + id).then(() => {
            alert("Cart item deleted successfully!!");
        }).catch((err) => {
            alert(err);
        })
    };


    const updateFood = (id, UserID, Name, Price, quantity, val) => {
        const updatedFood = {
            UserID: UserID,
            Name: Name,
            Price: Price,
            Quantity: quantity + val,
        };
        axios.put('http://localhost:8070/cart/updateOne/' + id, updatedFood).then(() => {
        }).catch((err) => {
            alert(err);
        })
    }


    const totPrice = (Price) => {
        subTotal = parseInt(subTotal, 10) + parseInt(Price, 10);
    }

    return (
        <div className="shoppingCart">
            <br/>
            <Greeting isLoggedIn={isLoggedIn}/>
            <br/>
            <a className="foodPrices" href={"/customerViewFood"}>
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>


            <br/><br/><br/>
            <div className="row1">
                <div className="col-12">
                    <div className="">
                        <table className="cartTable  ">
                            <thead className="">
                            <tr>
                                <th className="text-center ">Name</th>
                                <th className="text-center">Unit Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Total Price</th>
                                <th className="text-center"></th>


                            </tr>
                            </thead>
                            <tbody className="table-bordered cartbody text-center">
                            {Cart.map((cart) => {
                                return (
                                    <tr>
                                        <td>{cart.Name}</td>
                                        {/*<td><img width="200px "src={food.Image} /></td>*/}
                                        <td>Rs. {cart.Price}.00</td>
                                        <td>
                                            <div className="row">
                                                <div className="col-md-5"><em className=" fa fa-minus qtyRemove "
                                                                              onClick={() => {
                                                                                  updateFood(cart._id, cart.UserID, cart.Name, cart.Price, cart.Quantity, -1)
                                                                              }}/></div>
                                                <div className="col-md-2">{cart.Quantity}</div>
                                                <div className="col-md-5"><em className="fa fa-plus qtyAdd"
                                                                              onClick={() => {
                                                                                  updateFood(cart._id, cart.UserID, cart.Name, cart.Price, cart.Quantity, 1)
                                                                              }}/></div>
                                            </div>
                                        </td>
                                        <td>Rs. {cart.Quantity * cart.Price}.00</td>
                                        <br/>
                                        <br/> <a style={{color: "#e60000"}} id="icon">
                                        {totPrice(cart.Quantity * cart.Price)}


                                        <em className="fas fa-trash"
                                            onClick={() => {
                                                if (window.confirm("Are you sure you want to remove this item from cart?")) {
                                                    deleteFood(cart._id)
                                                }
                                                ;
                                            }}/></a>
                                        <br/><br/>
                                    </tr>
                                );
                            })}

                            </tbody>
                        </table>
                        <div className="subTot">Sub Total = Rs. {subTotal}.00</div>
                        <br/> <br/> <br/>
                        <a className="cartOrder" href={'/PayPayments'}>CHECKOUT
                        </a>

                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShoppingCart;
