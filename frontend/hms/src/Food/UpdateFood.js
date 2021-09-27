import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";
import ProgressBar from "../comps/ProgressBar";
import '../CSS/ProgressBar/ProgressBar.css'

const UpdateFood = () => {

    const { id} = useParams();
    const history = useHistory();

    const[Code, setCode] = useState("");
    const[Name, setName] = useState("");
    const[Price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [food, setFood] = useState([]);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    useEffect(() => {

        function getFood() {
            axios.get("http://localhost:8070/food/get/" + id ).then((res) => {
                setFood(res.data);
                console.log(food);
            }).catch((err) => {
            })
        }

        getFood();
    }, []);


    const codeSetter = (e) => {
        setCode(e.target.value);
    }
    const nameSetter = (e) => {
        setName(e.target.value);
    }
    const priceSetter = (e) => {
        setPrice(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const updatedFood = {
            Code: Code,
            Image: url,
            Name: Name,
            Price: Price
        };
        axios.put('http://localhost:8070/food/updateOne/' + id, updatedFood).then(() => {
            alert("Food item updated");
             history.push('/foodManagement');
        }).catch((err) => {
            alert(err);
        })
    }

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image(.png, .jpeg, .jpg)');
        }
    };

    const deleteFood = (id) =>{
        history.push('/foodManagement');
        axios.delete('http://localhost:8070/food/delete/' + id).then(()=>{
        }).catch((err)=>{
            alert(err);
        })
    };

    return (
        <div className="addFood" style={{paddingBottom: '200px'}}>
            <a className="btn btn-default foodPrices" href={"/foodManagement"} >
                <i className="fa fa-home" style={{fontWeight: "bold"}}></i> Home
            </a>
            <div >
                {/*<div className="col-sm-2"></div>*/}
                <div class=" col-sm-3 " style={{marginLeft: '550px'}}>
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center" >
                        <div>
                            <form class="card" style={{opacity: '0.95', marginTop:'100px'}}>
                                <br />
                                <h2 class="text-center">{food.Name}</h2>
                                <br />
                                <div className="container">
                                    <div><label>Food Code</label><input class="form-control" placeholder={food.Code} type="text" onChange={codeSetter}/>
                                    </div>
                                    <div className="form-group" >
                                        <div ><label >
                                            Update Image
                                        </label>

                                        <label   className={"mylabel1"}>
                                            <input type="file" onChange={handleChange} />
                                            <i id="image" className="fa fa-plus-circle" size="large" />
                                        </label>
                                        </div>
                                        <div className="text-center" >
                                            <img width="200px " src={url} /></div>
                                        <div className="output">
                                            { error && <div className="error">{ error }</div>}
                                            { file && <div>{ file.name }</div> }
                                            { file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/> }
                                            {file && <div> {file.url}</div>}
                                        </div>

                                        <div><label>Name</label><input class="form-control" placeholder={food.Name} type="text" onChange={nameSetter}/></div>
                                        <div><label>Price(Rs)</label><input class="form-control" placeholder={food.Price} min="0" type="Number" onChange={priceSetter}/></div>
                                        <br/>
                                        <button class="btn  btn-warning" type="submit" style={{fontWeight: "bold"}} onClick={onSubmit}>&nbsp;Update Food</button>
                                        <button className="btn-del btn btn-danger " style={{fontWeight: "bold"}} type="submit" onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this food item?")) {
                                                deleteFood(food._id)
                                            }
                                            ;
                                        }}>Delete Food</button>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UpdateFood;
