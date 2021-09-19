import React, {useState, useEffect} from "react";
import Search from "../Common/Search";
import axios from "axios";

const CustomerViewFood = () => {

    const [food, setFood] = useState();
    const [quantity, setQuantity] = useState(1);
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState("")
    const name = useState("");
    const price = useState("");

    const quantitySetter = (e) => {
        setQuantity(e.target.value);
    }



    useEffect(() => {
        const fetchFood = async () => {
            const res = await fetch(`http://localhost:8070/food/`);
            const data = await res.json();
            setFood(data);
        };
        fetchFood();
    }, []);

    console.log(food)

    const AddToCart = (e) => {
        // nameSetter(e);
        // priceSetter(e);
        const newFood = {
            UserID: "userID",
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


    const onSubmit = (name, price)  => {

        const newFood = {
            UserID: "xfxf",
            Name: name,
            Price: price,
            Quantity: quantity
        };
        axios.post('http://localhost:8070/cart/add', newFood).then(() => {
            alert("Item added to cart");
        }).catch((err) => {
            alert(err);
        })
        //
        // this.props.addItem(newItem, this.props.history);
    }




    return (
        <div>
            <br />
            <a className="foodPrices" href={"/"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
            </a>
            <Search />
            <a className="foodPrices " href={"/shoppingCart"} style={{float: "right", marginRight:"120px"}}>
                Cart <i className="fa fa-shopping-cart foodPrices"></i>
            </a>
            <br/><br />
            {food?.map((food) => (
                <div className="blog-card " key={food._id}>
                    <div className="foodLabels" >{food.Name}</div>
                    <embed src={food.Image}
                           alt="img" width={"100%"}
                           height={150} width={"auto"}/>
                    <br/>

                    <div className="foodPrices"
                    >Rs. {food.Price}.00</div>

                    <input className="foodQuantity" type="Number" defaultValue="1" onChange={quantitySetter}></input>
                    <div className="p-2 ">
                        <div className="text-center" >
                            <button className={"btn btn-primary btn-large"} onClick={()=>onSubmit(food.Name, food.Price)} >
                                ADD TO CART
                            </button>

                        </div>
                        <br/>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CustomerViewFood;
