import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import ProgressBar from "../comps/ProgressBar";

const AddFood = () => {

    const history = useHistory();

    const[Code, setCode] = useState("");
    const[Name, setName] = useState("");
    const[Price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

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
            const newFood = {
                Code: Code,
                Image: url,
                Name: Name,
                Price: Price
            };
            axios.post('http://localhost:8070/food/add', newFood).then(() => {
                alert("Food item added");
                console.log(url);
                // history.push('/');
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

    return (
        <div className="addFood" style={{paddingBottom: '200px'}}>
            <div >
                {/*<div className="col-sm-2"></div>*/}
                <div class=" col-sm-6 " style={{marginLeft: '550px'}}>
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center" >
                        <div>
                            <form class="card" style={{opacity: '0.95', marginTop:'100px'}}>
                                <br />
                                <h2 class="text-center">Add Food</h2>
                                <br />
                                <div className="container">
                                    <div><label>Food Code</label><input class="form-control" type="text" onChange={codeSetter}/>
                                    </div>
                                    <div class="form-group">
                                        <div><label >
                                            Add Image
                                        </label></div>
                                        <label className={"mylabel"}>
                                            <input type="file" onChange={handleChange} />
                                            <span>+</span>
                                        </label>
                                        <div className="output">
                                            { error && <div className="error">{ error }</div>}
                                            { file && <div>{ file.name }</div> }
                                            { file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/> }
                                            {file && <div> {file.url}</div>}
                                        </div>

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
