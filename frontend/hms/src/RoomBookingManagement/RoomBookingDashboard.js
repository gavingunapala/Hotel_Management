import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import axios from "axios";
import '../CSS/RoomBookingManagement/ManageRoomsDashboard.css';
import AdminSideNav from "../Admin/AdminSideNav";
import {Link} from "react-router-dom";


const RoomBookingDashboard = () => {
    const {roomBookingId} = useParams();
    const [Roombooking, setRoomBooking] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    function getRoomBooking() {
        axios
            .get("http://localhost:8070/RoomBooking/")
            .then((res) => {
                console.log(res.data);
                setRoomBooking(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    const deleteRoomBooking = (id) =>{
        axios.delete('http://localhost:8070/RoomBooking/delete/' + id).then(()=>{
            alert("Room booking details deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };

    useEffect(() => {
        getRoomBooking();
    }, [Roombooking]);


    return (
        <div className="row1">
            <div className="col-2"> <AdminSideNav/></div>
            <div class="col-10">
                <br />
                <div class="">
                    <div className="searchBar">
                        <input type="search" className="form-control" placeholder="Search..." onChange={event =>{setSearchWord(event.target.value)}}/>
                    </div>
                </div>

                <div class="card-header">

                    <a href={"/RoomBookingManagementReport"} className="btn btn-success btngenarate" >Generate Report</a>
                </div>

                <div class="row1">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table1  table-hover table-bordered table-striped  tablesorter" id="ipi-table">
                                <thead class="thead-dark">
                                <tr>
                                    <th class="text-center">Room Type</th>
                                    <th className="text-center">No Of People</th>
                                    <th className="text-center col-lg-3">Check In Date</th>
                                    <th class="text-center">Check Out Date</th>
                                    <th class="text-center filter-false sorter-false ">Actions</th>
                                </tr>

                                </thead>
                                <tbody class="text-center">
                                {Roombooking.filter((val)=>{
                                    if(SearchWord ==""){
                                        return val
                                    }else if(val.RoomType.toLowerCase().includes(SearchWord.toLowerCase())){
                                        return val
                                    }
                                }).map((Roombooking) => {
                                    return (

                                        <tr>
                                            <td>{Roombooking.RoomType}</td>
                                            <td>{Roombooking.NoOfPeople}</td>
                                            <td>{Roombooking.CheckInDate.split('T')[0]}</td>
                                            <td>{Roombooking.CheckOutDate.split('T')[0]}</td>
                                            <br />
                                            {/*<Link class="btn btn-primary" role="button" to={`/ViewBookedRooms/${Roombooking._id}`}>*/}
                                            {/*    <em className="fa fa-eye"  id="icon"></em>*/}
                                            {/*</Link>*/}
                                            <Link class="btn btn-success" role="button" to={`/UpdateBookedRooms/${Roombooking._id}`}>
                                                <em className="fa fa-edit" id="icon"></em>
                                            </Link>
                                            <a className="btn btn-danger" id="icon">
                                                <em className="fa fa-trash"
                                                    onClick={()=>{if(window.confirm("Are you sure you want to delete this Booking?")){deleteRoomBooking(Roombooking._id)};}} /></a>
                                            <br /><br />
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RoomBookingDashboard;
