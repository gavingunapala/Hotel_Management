import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
// import img from '../Images/undraw_Sync_files_re_ws4c.png';
import '../CSS/Room_Management/ManageRoomsDashboard.css';


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
        <div>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                rel='stylesheet' type='text/css' />
            <br/><br/>
            <div class="container-fluid">
                <div class="row">

                    <div class="col-12 col-sm-6 col-md-6">
                        <a href="/AddRooms" class="btn btn-primary" role="button">
                            <i class="fa fa-plus"></i>&nbsp;Add New Room
                        </a>
                    </div>
                    <div className="form-group pull-right col-lg-4">
                        <input type="text" id='search' className="search form-control" placeholder="Search by typing here.."/>
                    </div>
                    <span className="counter pull-right"></span>
                    <br/> <br/><br/>
                </div>
                <div class="card" id="TableSorterCard">
                    <div class="card-header">
                            <div className="form-group pull-right col-lg-4">
                                    <button className="btn btn-primary" type="submit" id="fa">&nbsp;Generate Report</button>&nbsp;&nbsp;
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table  table-hover table-bordered table-striped table tablesorter" id="ipi-table">
                                <thead class="thead-dark">
                                <tr>
                                    <th class="text-center">Room Type</th>
                                    <th className="text-center col-lg-4">Room Image</th>
                                    <th class="text-center">Sleeps</th>
                                    <th className="text-center">Current Price</th>
                                    <th className="text-center">Facilities</th>
                                    <th className="text-center">Description</th>
                                    <th class="text-center filter-false sorter-false col-lg-1">Actions</th>
                                </tr>
                                </thead>
                                <tbody class="text-center">
                                {Room.map((Room) => {
                                    return (
                                        <tr>
                                            <td>{Room.RoomType}</td>
                                            <td>{Room.avatar}</td>
                                            <td>{Room.Sleeps}</td>
                                            <td>{Room.CurrentPrice}</td>
                                            <td>{Room.Facilities}</td>
                                            <td>{Room.Description}</td>

                                            <Link class="btn btn-primary" role="button" to={`/get/${Room._id}`}>
                                                <em className="fa fa-eye"  id="icon"></em>
                                            </Link>
                                            <Link class="btn btn-success" role="button" to={`/update/${Room._id}`}>
                                                <em className="fa fa-edit" id="icon"></em>
                                            </Link>
                                            <a className="btn btn-danger" id="icon">
                                                <em className="fa fa-trash"
                                                onClick={()=>{if(window.confirm("Are you sure you want to delete this Room?")){deleteRoom(Room._id)};}} /></a>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                            {/*<button className="btn btn-primary">*/}
                            {/*    <Link to="/">+ Back to Home</Link>*/}
                            {/*</button>*/}
                            <div className="col-12 col-sm-6 col-md-6">
                                <a href="/" className="btn btn-primary" role="button">
                                    <i className="fa fa-plus"></i>&nbsp;Back to Home
                                </a>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageRoomsDashboard;
