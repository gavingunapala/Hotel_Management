import React from 'react';
import img from '../Images/undraw_Forms_re_pkrt.png';

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
                            <form method="post" class="card">
                                <br/>
                                <h2 className="text-center">Update Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div class="form-group">
                                        <div><label>Room Type</label><input class="form-control" type="text"/></div>
                                        <div><label>Sleeps</label><input class="form-control" type="text"/></div>
                                        <div><label>Current Price</label><input class="form-control" type="text"/></div>
                                        <div><label>Facilities</label><input class="form-control" type="text"/></div>
                                        <div><label>Description</label><textarea id="w3review" className="form-control" rows="4" cols="50"/></div>
                                        <br/>
                                        <button class="btn btn-warning" type="submit">&nbsp;Update Rooms</button>&nbsp;&nbsp;
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