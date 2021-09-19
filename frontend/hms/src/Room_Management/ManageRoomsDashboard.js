import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import '../CSS/Room_Management/ManageRoomsDashboard.css';
import AdminSideNav from "../Admin/AdminSideNav";


const ManageRoomsDashboard = () => {

    const {roomId} = useParams();
    const [Room, setRoom] = useState([]);

    function getRoom() {
        axios
            .get("http://localhost:8070/Room/")
            .then((res) => {
                console.log(res.data);
                setRoom(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    const deleteRoom = (id) =>{
        axios.delete('http://localhost:8070/Room/delete/' + id).then(()=>{
            alert("Room details deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };

    useEffect(() => {
        getRoom();
    }, [Room]);

    return (
        <div className="row1">
            <div className="col-2"> <AdminSideNav/></div>

            <div class="col-10">
                <div class="">

                    <div class="col-12 col-sm-6 col-md-6">
                        <a className="btn btn-default foodPrices" href={"/"} >
                            <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
                        </a>
                    </div>
                    <div className="form-group pull-right col-lg-4">
                        <input type="text" id='search' className="search form-control" placeholder="Search by typing here.."/>
                    </div>
                    <span className="counter pull-right"></span>
                    <br/> <br/><br/>
                </div>

                    <div class="card-header">

                            <a href="/AddRooms" className="btn btn-primary" role="button">
                                <i className="fa fa-plus"></i>&nbsp;Add New Room
                            </a>
                        <button className="btn btn-success btngenarate" type="submit" >Generate Report</button>
                    </div>

                <div class="row1">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table1  table-hover table-bordered table-striped  tablesorter" id="ipi-table">
                                <thead class="thead-dark">
                                <tr>
                                    <th class="text-center">Room Type</th>
                                    <th className="text-center col-lg-3">Room Image</th>
                                    <th class="text-center">Sleeps</th>
                                    <th className="text-center">Current Price</th>
                                    <th className="text-center col-lg-2">Facilities</th>
                                    <th className="text-center col-lg-2">Description</th>
                                    <th class="text-center filter-false sorter-false ">Actions</th>
                                </tr>

                                </thead>
                                <tbody class="text-center">
                                {Room.map((Room) => {
                                    return (
                                        <tr>
                                            <td>{Room.RoomType}</td>
                                            <td><img width="200px "src={Room.avatar} /></td>
                                            <td>{Room.Sleeps}</td>
                                            <td>{Room.CurrentPrice}</td>
                                            <td>{Room.Facilities}</td>
                                            <td>{Room.Description}</td>
                                            <br />
                                            <Link class="btn btn-primary" role="button" to={`/ViewRooms/${Room._id}`}>
                                                <em className="fa fa-eye"  id="icon"></em>
                                            </Link>
                                            <Link class="btn btn-success" role="button" to={`/updateRooms/${Room._id}`}>
                                                <em className="fa fa-edit" id="icon"></em>
                                            </Link>
                                            <a className="btn btn-danger" id="icon">
                                                <em className="fa fa-trash"
                                                onClick={()=>{if(window.confirm("Are you sure you want to delete this Room?")){deleteRoom(Room._id)};}} /></a>
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
export default ManageRoomsDashboard;
