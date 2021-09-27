import React, {useState, useEffect} from "react";
import Search from "../Common/Search";
import axios from "axios";
import {useHistory} from "react-router-dom";
import LogoutNav from "../Login/Greeting";
import Greeting from "../Login/Greeting";


const CustomerViewFood = () => {

    const [food, setFood] = useState();
    const [quantity, setQuantity] = useState(1);
    const name = useState("");
    const price = useState("");
    const [SearchWord, setSearchWord] = useState('');
    const[userId, setUserId] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const his = useHistory();

    const quantitySetter = (e) => {
        setQuantity(e.target.value);
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser != null){
            setUserId(loggedInUser);
            setIsLoggedIn(true);
        }

        const fetchFood = async () => {
            const res = await fetch(`http://localhost:8070/food/`);
            const data = await res.json();
            setFood(data);
        };
        fetchFood();
    }, []);

    console.log(food)


    const onSubmit = (name, price)  => {
        if(userId != '') {
            if(quantity >= 1) {
                const newFood = {
                    UserID: userId,
                    Name: name,
                    Price: price,
                    Quantity: quantity
                };
                axios.post('http://localhost:8070/cart/add', newFood).then(() => {
                    alert("Item added to cart");
                }).catch((err) => {
                    alert(err);
                })
            }
            else {
                alert("At least one item must be added");
            }
        }
        else{
            his.push('/Login');
        }
    }

    return (
        <div>
            <br />
            <Greeting isLoggedIn={isLoggedIn} />
            <br />
            <a className="foodPrices" href={"/"} >
                <i className="fa fa-home" style={{fontWeight: "bold"}}>
                </i> Home
            </a>
            <div className="col-xs-6">
                <div className="searchBar">
                    <input type="search" className="form-control" placeholder="Search..." onChange={event =>{setSearchWord(event.target.value)}}/>
                </div>
            </div>
            <a className="foodPrices " href={"/shoppingCart"} style={{float: "right", marginRight:"120px"}}>
                Cart <i className="fa fa-shopping-cart foodPrices"></i>
            </a>
            <br/><br />
            {food?.filter((val)=>{
                if(SearchWord ==""){
                    return val
                }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())) {
                    return val
                }
            }).map((food) => (
                <div className="viewFoodCard " key={food._id}>
                    <div className="foodLabels" >{food.Name}</div>
                    <embed src={food.Image}
                           alt="img" width={"100%"}
                           height={150} width={"auto"}/>
                    <br/>

                    <div className="foodPrices"
                    >Rs. {food.Price}.00</div>

                    <input className="foodQuantity" type="Number" min="1" defaultValue="1" onChange={quantitySetter}></input>
                    <div className="p-2 ">
                        <div className="text-center" >
                            <button className={"btn qtyAdd btn-large"} onClick={()=>onSubmit(food.Name, food.Price)} >
                                ADD TO CART
                            </button>
                            <br />

                        </div>
                        <br/>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CustomerViewFood;
