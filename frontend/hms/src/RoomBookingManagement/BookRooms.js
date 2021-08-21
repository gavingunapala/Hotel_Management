import React, {useState} from 'react';
// import img from '../Images/undraw_Sync_files_re_ws4c.png';
import '../CSS/Room_Management/AddRooms.css';

import img from "../Images/undraw_Sync_files_re_ws4c.png";

const BookRooms = () => {
    return (
        <div>
            <br></br>

            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form method="post" className="card" id="room">
                                <br/>
                                <h2 className="text-center">Book Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div className="" id='group'>
                                        <br/>
                                        <div><label for="type">Room Type</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" >
                                                <option>Choose</option>
                                                <option>Premium Double Room</option>
                                                <option>Cilantro Suite</option>
                                                <option>Executive Room with Lounge Access</option>
                                                <option>Superior Twin Room</option>
                                                <option>Superior King Room</option>
                                            </select>
                                        </div>
                                        <div><label>No Of People</label><input id='left' className="form-control" type="text"  /></div>
                                        <div><label>Check In Date</label><input className="form-control" type="text" /></div>
                                        <div><label>Check Out Date</label><textarea id="w3review" className="form-control" rows="4" cols="50" /></div>

                                        <br/>
                                        <button className="btn btn-primary" type="submit" id="addrooms" >&nbsp;Book </button>&nbsp;&nbsp;
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
export default BookRooms;