import React,{useEffect, useState} from 'react';
import '../CSS/RoomBookingManagement/BookRooms.css';
import img from "../Images/undraw_Browsing_online_re_umsa.png";
import {useHistory} from "react-router-dom";
import axios from "axios";


const UpdateBookedRooms = ({match}) => {
    console.log(match.params.id);
    const id = match.params.id;

    let his = useHistory();

    const [RoomBooking, setRoomBooking] = useState([]);

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

    //get room details
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

    const onSubmit = (e) => {
        e.preventDefault();
        const updateRoomBooking = {
            RoomType: RoomType,
            NoOfPeople: NoOfPeople,
            CheckInDate: CheckInDate,
            CheckOutDate: CheckOutDate

        };
        his.push('/ViewBookedRooms');
        axios.put('http://localhost:8070/RoomBooking/updateOne/' + id, updateRoomBooking).then(() => {
            alert("Room details Updated successfully!!!");
        }).catch((err) => {
            alert(err);
        })
    }


    return (
        <div>

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
                                <h2 className="text-center">Update Booked Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div className="" id='group'>
                                        <br/>
                                        <div><label for="type">Room Type</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" onChange={roomtypeSetter} value={RoomBooking.RoomType}>
                                                <option>Choose</option>
                                                <option>Premium Double Room</option>
                                                <option>Cilantro Suite</option>
                                                <option>Executive Room with Lounge Access</option>
                                                <option>Superior Twin Room</option>
                                                <option>Superior King Room</option>
                                            </select>
                                        </div>
                                        <div><label>No Of People</label><input id='left' className="form-control" type="number" placeholder={RoomBooking.NoOfPeople} onChange={noofpeopleSetter} /></div>
                                        <div><label>Check In Date</label><input className="form-control" type="date" placeholder={RoomBooking.CheckInDate} onChange={checkindateSetter} /></div>
                                        <div><label>Check Out Date</label><input className="form-control" type="date" placeholder={RoomBooking.CheckOutDate} onChange={checkoutdateSetter} /></div>

                                        <br/>
                                        <button className="btn btn-warning" type="submit" id="addrooms" onClick={onSubmit} >&nbsp;Update</button>&nbsp;&nbsp;
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
export default UpdateBookedRooms;