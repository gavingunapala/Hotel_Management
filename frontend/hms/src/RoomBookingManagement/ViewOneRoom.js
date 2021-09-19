import React, {useState, useEffect} from "react";
import img from '../Images/christopher-jolly-GqbU78bdJFM-unsplash.jpg'
import '../CSS/RoomBookingManagement/ViewOneRoom.css'


const ViewOneRoom = () => {

    return (
        <div>
            <br/>
            <br></br>
            <a className="btn btn-default " href={"/ViewAllRooms"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
            </a>
            <div className="container profile profile-view" id="profile">
                {/*<div className="row">*/}
                {/*    <div className="col-md-12 alert-col relative">*/}
                {/*        <div className="alert alert-info alert-dismissible absolue center" role="alert">*/}
                {/*            <button type="button" className="btn-close" data-bs-dismiss="alert"*/}
                {/*                    aria-label="Close"></button>*/}
                {/*            <span>Profile save with success</span></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
                <form className="card1">
                    <div className="row profile-row">
                        <div className="col-md-4 relative">
                            <br/>
                            <div className="avatar">
                                    <img src={img} loading="auto" alt="center" height="280" width="300"/><br/>
                                <label className="title" style={{fontSize: "20px" , marginLeft:"70px"}}><strong>Superior Twin</strong> </label>
                            </div>
                            <input className="form-control form-control" type="file" name="avatar-file"/>
                        </div>
                        <div className="col-md-8">
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="form-group mb-3">
                                            <br/>
                                            <label className="form-label">Room Type </label>
                                            {/*<input className="form-control" type="text" name="firstname" value="Room Type"/>*/}
                                        </div>
                                    </div>
                                    <div className="col-sm-8 col-md-5">
                                        <div className="form-group mb-1">
                                            <br/>
                                            {/*<label className="form-label">Lastname </label>*/}
                                            <input className="form-control" type="text" name="lastname" value="Superior Twin"/>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className="form-group mb-3"><label className="form-label">Description </label>
                                    <textarea id="w3review" className="form-control" rows="4" cols="50"
                                              value="City view, Pool with a view, Air conditioning, Flat-screen TV, Free WiFi, Safety deposit box"/>
                                </div>
                            </div>
                                <div className="col-sm-8 col-md-5">
                                    <div className="form-group mb-1">

                                        <label className="form-label">Facilities</label>
                                        <textarea id="w3review" className="form-control" rows="4" cols="50"
                                                  value="2 single beds, Pay in advance, No modifications after booking"/>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="form-group mb-3"><label className="form-label">No Of People </label><input
                                            className="form-control" type="text" name="password" value="3"
                                            required=""/></div>
                                    </div>
                                    <div className="col-sm-12 col-md-5">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Current Price</label>
                                            <input className="form-control" type="text" name="confirmpass" value="18000" required=""/>
                                        </div>
                                    </div>
                                </div>

                                    <div className="">
<br/>
                                            <button className="btn btn-primary form-btn" type="submit" style={{marginLeft:"300px"}}>Book Room</button>
                                    </div>
                            <br/><br/>
                        </div>
                    </div>
                </form>
            </div>
            <br/><br/>
        </div>

    );
}
export default ViewOneRoom;
