import React from 'react';
import img from '../Images/undraw_Forms_re_pkrt.png';
import '../CSS/Room_Management/UpdateRooms.css';

const UpdateRooms = () => {
    return (
        <div>
            <br></br>

            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card" id='upd'>
                                <br/>
                                <h2 className="text-center">Update Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div class="form-group">
                                        <div className="dropdown">
                                            <button className="form-control" id='select'>Room Type</button>
                                            <div className="dropdown-content">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                        <div><label>Sleeps</label><input class="form-control" type="text"/></div>
                                        <div><label>Current Price</label><input class="form-control" type="text"/></div>
                                        <div><label>Facilities</label><input class="form-control" type="text"/></div>
                                        <div><label>Description</label><textarea id="w3review" className="form-control" rows="4" cols="50"/></div>
                                        <br/>
                                        <button className="btn btn-warning" type="submit" id="updaterooms">&nbsp;Update Rooms</button>&nbsp;&nbsp;
                                        <br/>
                                        <br/>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={img} loading="auto" alt="center" height="500" width="500"/>
                </div>


            </div>
        </div>
    )
}
export default UpdateRooms;