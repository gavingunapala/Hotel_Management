import React, {useState, useEffect} from 'react';
import img from '../Images/undraw_Booked_re_vtod.png';
import '../CSS/RoomBookingManagement/ViewBookedRooms.css';
import axios from "axios";
import {useHistory} from "react-router-dom";
import Greeting from "../Login/Greeting";

const ViewBookedRooms = ({match}) => {

    console.log(match.params.id);
    const id = match.params.id;
    console.log(id)
    let his = useHistory();
    const [Roombooking, setRoomBooking] = useState([]);

    useEffect(() => {
        function getRoomBooking() {
            axios.get("http://localhost:8070/RoomBooking/get/" + id).then((res) => {
                setRoomBooking(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getRoomBooking();
    }, []);

    function deleteRoomBooking() {
        axios.delete('http://localhost:8070/RoomBooking/delete/' + id).then(() => {
            localStorage.clear();
            his.push('/Login');
        }).catch((err) => {
            alert(err);
        })
    }


    return (
        <div>
            <br />

            <br />
            <a className="btn btn-default foodPrices" href={"/RoomBookingDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form method="post" className="card" id="room" style={{opacity: '0.95'}}>
                                <br/>
                                <h2 className="text-center">View Booked Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div className="" id='group'>
                                        <br/>
                                        <div><label htmlFor="type">Room Type</label>

                                            <li className="form-control">{Roombooking.RoomType}</li>
                                        </div>
                                        <div><label>No Of People</label><input id='left' className="form-control" type="number" placeholder={Roombooking.NoOfPeople} /></div>
                                        <div><label>Check In Date</label><input className="form-control" type="" placeholder={Roombooking.CheckInDate}/></div>
                                        <div><label>Check Out Date</label><input className="form-control" type="" placeholder={Roombooking.CheckOutDate}/></div>

                                        <br/>
                                        <a href={`/UpdateBookedRooms/${Roombooking._id}`} className="btn btn-warning" id='war' type="reset">Update</a>
                                        <button className="btn btn-danger" type="reset" id='danger' onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this booking?")) {
                                                deleteRoomBooking()
                                            };
                                        }}>Delete</button>
                                        {/*<button className="btn btn-warning" type="submit" id='war' >&nbsp;Update</button>&nbsp;&nbsp;*/}
                                        {/*<button className="btn btn-danger" type="submit" id='danger'>&nbsp;Delete</button>&nbsp;&nbsp;*/}
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
export default ViewBookedRooms;