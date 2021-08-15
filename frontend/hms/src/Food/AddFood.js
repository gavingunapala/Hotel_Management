import React from 'react';
import img from '../Images/addFood.png';

const AddFood = () => {


    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            this.setState({
                image: URL.createObjectURL(event.target.files[0])
            });
        }
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
                                    <div><label>Food Code</label><input class="form-control" type="text"/>
                                    </div>
                                    <div class="form-group">
                                        <div><label for='image' className='custom-file-upload btn btn-primary'>
                                            <i className='fa fa-plus'></i>
                                            Add Image
                                        </label>
                                            Select image
                                            <input id='image' class="form-control" type="file" onChange={onImageChange}/>

                                        </div>
                                        <div><label>Name</label><input class="form-control"
                                                                                    type="text"/></div>
                                        <div><label>Price(Rs)</label><input class="form-control"
                                                                                          type="text"/></div>
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
