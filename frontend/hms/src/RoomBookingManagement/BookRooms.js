import React, {useState} from 'react';
import '../CSS/RoomBookingManagement/BookRooms.css';
import img from "../Images/undraw_Sync_files_re_ws4c.png";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import ProgressBar from "../comps/ProgressBar.js";
import '../CSS/ProgressBar/ProgressBar.css'


const BookRooms = () => {
    const history = useHistory();

    const [RoomType, setRoomType] = useState("");
    const [NoOfPeople, setNoOfPeople] = useState("");
    const [CheckInDate, setCheckInDate] = useState("");
    const [CheckOutDate, setCheckOutDate] = useState("");


    const roomtypeSetter = (e) => {
        setRoomType(e.target.value);
    }
    const noofpeopleSetter = (e) => {
        setNoOfPeople(e.target.value);
    }
    const checkindateSetter = (e) => {
        setCheckInDate(e.target.value);
    }
    const checkoutdateSetter = (e) => {
        setCheckOutDate(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const newRoomBooking = {
            RoomType: RoomType,
            NoOfPeople: NoOfPeople,
            CheckInDate: CheckInDate,
            CheckOutDate: CheckOutDate

        };
        axios.post('http://localhost:8070/RoomBooking/add', newRoomBooking).then(() => {
            alert("New Room Booked successfully!");
            history.push('/RoomBookingDashboard');
        }).catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <br></br>
            <a className="btn btn-default foodPrices" href={"/RoomBookingDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>
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
                                                    id="type" onChange={roomtypeSetter}>
                                                <option>Choose</option>
                                                <option>Premium Double Room</option>
                                                <option>Cilantro Suite</option>
                                                <option>Executive Room with Lounge Access</option>
                                                <option>Superior Twin Room</option>
                                                <option>Superior King Room</option>
                                            </select>
                                        </div>
                                        <div><label>No Of People</label><input id='left' className="form-control" type="number" onChange={noofpeopleSetter}  /></div>
                                        <div><label>Check In Date</label><input className="form-control" type="date" onChange={checkindateSetter} /></div>
                                        <div><label>Check Out Date</label><input className="form-control" type="date" onChange={checkoutdateSetter} /></div>


                                        <br/>
                                        <button className="btn btn-primary" type="submit" id="addrooms" onClick={onSubmit} >&nbsp;Book</button>&nbsp;&nbsp;
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