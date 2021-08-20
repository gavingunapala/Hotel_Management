import React, {useState, useEffect} from "react";
import Search from "../Common/Search";

const CustomerViewFood = () => {

    const [food, setFood] = useState();

    useEffect(() => {
        const fetchFood = async () => {
            const res = await fetch(`http://localhost:8070/food/`);
            const data = await res.json();
            setFood(data);
        };
        fetchFood();
    }, []);

    console.log(food)

    return (
        <div>
            <a className="btn btn-default foodPrices" href={"/"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
            </a>
            <Search />
            <div className="foodPrices " style={{float: "right", marginRight:"120px"}}>
            Cart <i className="fa fa-shopping-cart foodPrices"></i>
            </div>
            <br/><br />
            {food?.map((food) => (
                <div className="blog-card " key={food._id}>
                    <div className="foodLabels">{food.Name}</div>
                    <embed src={food.Image}
                           alt="img" width={"100%"}
                           height={150} width={"auto"}/>
                    <br/>

                <div className="foodPrices">Rs. {food.Price}</div>

                    <input className="foodQuantity" type="Number" defaultValue="1"></input>
                    <div className="p-2 ">
                        <div className="text-center" >
                            <a href={food.Image}
                               className={"btn btn-primary btn-large"}>
                                ADD TO CART
                            </a>

                        </div>
                        <br/>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CustomerViewFood;
