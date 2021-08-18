import React, {useState} from 'react';
import img from '../Images/addFood.png';
import {useHistory} from 'react-router-dom';
import axios from "axios";

const AddFood = () => {

    const history = useHistory();

    const[Code, setCode] = useState("");
    const[Image, setImage] = useState("");
    const[Name, setName] = useState("");
    const[Price, setPrice] = useState("");

    const codeSetter = (e) => {
        setCode(e.target.value);
    }
    const imageSetter = (e) => {
        setImage(e.target.value);
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const priceSetter = (e) => {
        setPrice(e.target.value);
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
    }

    const onSubmit = (e) => {
            e.preventDefault();
            const newFood = {
                Code: Code,
                Image: Image,
                Name: Name,
                Price: Price
            };
            axios.post('http://localhost:8070/food/add', newFood).then(() => {
                alert("Food item added");
                history.push('/');
            }).catch((err) => {
                alert(err);
            })
    }


    return (
        <div className="addFood" style={{paddingBottom: '200px'}}>
            <div >
                {/*<div className="col-sm-2"></div>*/}
                <div class=" col-sm-3 " style={{marginLeft: '550px'}}>
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center" >
                        <div>
                            <form class="card" style={{opacity: '0.95'}}>
                                <br />
                                <h2 class="text-center">Add Food</h2>
                                <br />
                                <div className="container">
                                    <div><label>Food Code</label><input class="form-control" type="text" onChange={codeSetter}/>
                                    </div>
                                    <div class="form-group">
                                        <div><label >
                                            Add Image
                                        </label>
                                            <input id='image' class="form-control" type="file" onChange={imageSetter}/></div>
                                        <div><label>Name</label><input class="form-control" type="text" onChange={nameSetter}/></div>
                                        <div><label>Price(Rs)</label><input class="form-control" type="text" onChange={priceSetter}/></div>
                                        <br/>
                                        <button class="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Add Food</button>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*<div className="col-md-1 image">*/}
                {/*    <img src={img} loading="auto" alt="center" height="400"*/}
                {/*         width="500" style={{paddingTop: '100px'}}/>*/}
                {/*</div>*/}


            </div>
        </div>
    )
}
export default AddFood;
