import React, {useState, useEffect} from "react";
import img from '../Images/christopher-jolly-GqbU78bdJFM-unsplash.jpg'
import '../CSS/RoomBookingManagement/ViewOneRoom.css'
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import Greeting from "../Login/Greeting";

const ViewOneRoom = ({match}) => {
    console.log(match.params.id);
    const id = match.params.id;
    console.log(id)
    let his = useHistory();
    const [Room, setRoom] = useState([]);
    const[userId, setUserId] = useState('');
    const[roomId, setId] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const onSubmit = () => {
        if(userId != '') {
            // his.push(`BookRooms/${Room._id}`);
            his.push({pathname:'/BookRooms', state : {userId: userId, roomId: roomId},});
            // /BookRooms/${Room._id}

        }
        else{
            his.push('/Login');
        }
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser != null){
            setUserId(loggedInUser);
            setIsLoggedIn(true);
        }

        function getRoom() {
            axios.get("http://localhost:8070/Room/get/" + id).then((res) => {
                setRoom(res.data);
                setId(res.data._id);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getRoom();
    }, []);

    return (
        <div>
            <br />
            <Greeting isLoggedIn={isLoggedIn} />
            <br />
            <a className="foodPrices " href={"/ViewAllRooms"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
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
                                    <img src={Room.avatar} loading="auto" alt="center" height="280" width="300"/><br/>
                                <label className="title" style={{fontSize: "20px" , marginLeft:"70px"}}><strong>{Room.RoomType}</strong> </label>
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
                                            <input className="form-control" type="text" name="lastname" placeholder={Room.RoomType}/>
                                        </div>
                                    </div>
                                </div>
                            <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <div className="form-group mb-3"><label className="form-label">Description </label>
                                    <textarea id="w3review" className="form-control" rows="4" cols="50"
                                              placeholder={Room.Description}/>
                                </div>
                            </div>
                                <div className="col-sm-8 col-md-5">
                                    <div className="form-group mb-1">

                                        <label className="form-label">Facilities</label>
                                        <textarea id="w3review" className="form-control" rows="4" cols="50"
                                                  placeholder={Room.Facilities}   />
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="form-group mb-3"><label className="form-label">No Of People </label><input
                                            className="form-control" type="text" name="password" placeholder={Room.Sleeps}
                                            required=""/></div>
                                    </div>
                                    <div className="col-sm-12 col-md-5">
                                        <div className="form-group mb-3">
                                            <label className="form-label">Current Price</label>
                                            <input className="form-control" type="text" name="confirmpass" placeholder={Room.CurrentPrice} required=""/>
                                        </div>
                                    </div>
                                </div>

                                    <div className="">
                                            <br/>
                                        <button className={"btn btn-primary"} style={{marginLeft:"300px"}} onClick={()=>onSubmit()} >
                                            Book Rooms
                                        </button>
                                            {/*<a href={onSubmit} style={{marginLeft:"300px"}}>*/}
                                            {/*    <h3 className='btn btn-primary'>Book Rooms</h3>*/}
                                            {/*</a>*/}
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
