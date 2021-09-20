import React,{useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
// import '../CSS/Admin/tableEmployee.css';



const ShoppingCart = () => {

    let his = useHistory();
    const [Cart, setCart] = useState([]);
    var subTotal = useState(0);

    useEffect(() => {

        function getCart() {
            axios.get("http://localhost:8070/cart" ).then((res) => {
                setCart(res.data);
            }).catch((err) => {
            })
        }

        getCart();
    }, []);


    const deleteFood = (id) =>{
        axios.delete('http://localhost:8070/food/delete/' + id).then(()=>{
            alert("Food item deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };


     const totPrice = (Price) =>{
         subTotal = parseInt(subTotal, 10) + parseInt(Price, 10);
     }

    return (
        <div className="shoppingCart">
            <br />
            <a className="foodPrices" href={"/customerViewFood"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>




                    <br /><br /><br />
                    <div className="row1">
                        <div className="col-12">
                            <div className="">
                                <table className="cartTable  table-bordered"
                                       id="ipi-table">
                                    <thead className="">
                                    <tr>
                                        <th className="text-center ">Name</th>
                                        <th className="text-center">Unit Price</th>
                                        <th className="text-center">Quantity</th>
                                        <th className="text-center">Total Price</th>
                                        <th className="text-center"></th>


                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {Cart.map((cart) => {
                                        return (
                                            <tr>
                                                <td>{cart.Name}</td>
                                                {/*<td><img width="200px "src={food.Image} /></td>*/}
                                                <td>Rs. {cart.Price}.00</td>
                                                <td>{cart.Quantity}</td>
                                                <td>Rs. {cart.Quantity * cart.Price}.00</td>
                                                <br />
                                                <br /> <a style={{color: "#e60000"}} id="icon">
                                                {totPrice(cart.Quantity * cart.Price)}
                                                {console.log(subTotal)}

                                                 <em className="fas fa-trash"
                                                        onClick={() => {
                                                            if (window.confirm("Are you sure you want to delete this food item?")) {
                                                                deleteFood(cart._id)
                                                            }
                                                            ;
                                                        }}/></a>
                                                <br /><br />
                                            </tr>
                                        );
                                    })}

                                    </tbody>
                                </table>
<div>Sub Total Rs. {subTotal}.00</div>
                                <br/>
                            </div>
                        </div>
                    </div>
{/*<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />*/}
        </div>
    )
}
export default ShoppingCart;
