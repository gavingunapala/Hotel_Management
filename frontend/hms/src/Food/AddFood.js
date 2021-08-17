import React, {useState} from 'react';
import img from '../Images/addFood.png';
import {useHistory} from 'react-router-dom';

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
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card">
                                <br />
                                <h2 class="text-center">Add Food</h2>
                                <br />
                                <div className="container">
                                    <div><label>Food Code</label><input class="form-control" type="text" onChange={codeSetter}/>
                                    </div>
                                    <div class="form-group">
                                        <div><label for='image' className='custom-file-upload btn btn-primary'>
                                            <i className='fa fa-plus'></i>
                                            Add Image
                                        </label>
                                            Select image
                                            <input id='image' class="form-control" type="file" onChange={imageSetter}/></div>
                                        <div><label>Name</label><input class="form-control" type="text" onChange={nameSetter}/></div>
                                        <div><label>Price(Rs)</label><input class="form-control" type="text" onChange={priceSetter}/></div>
                                        <br/>
                                        <button class="btn btn-primary" type="submit">&nbsp;Add Food</button>
                                        <br />
                                        <br />

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-1 image">
                    <img src={img} loading="auto" alt="center" height="400"
                         width="500"/>
                </div>


            </div>
        </div>
    )
}
export default AddFood;
