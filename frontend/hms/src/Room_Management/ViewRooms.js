import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from "axios";
import img from '../Images/undraw_Update_re_swkp.png';
import '../CSS/Room_Management/ViewRooms.css';
import {useHistory} from "react-router-dom";

const ViewRooms = ({match}) => {

    console.log(match.params.id);
    // const {roomId} = useParams();
    const id = match.params.id;
    console.log(id)
    let his = useHistory();
    const [Room, setRoom] = useState([]);

    // useEffect(() => {
    //     loadRoom();
    // }, [Room]);
    useEffect(() => {
        function getRoom() {
            axios.get("http://localhost:8070/Room/get/" + id).then((res) => {
                setRoom(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getRoom();
    }, []);

    function deleteRoom() {
        axios.delete('http://localhost:8070/Room/delete/' + id).then(() => {
            localStorage.clear();
            his.push('/Login');
        }).catch((err) => {
            alert(err);
        })
    }


    // const [RoomType, setRoomType] = useState("");
    // const [avatar, setAvatar] = useState("");
    // const [Sleeps, setSleeps] = useState("");
    // const [CurrentPrice, setCurrentPrice] = useState(null);
    // const [Facilities, setFacilities] = useState(null);
    // const [Description, setDescription] = useState(null);


    // const roomtypeSetter = (e) => {
    //     setRoomType(e.target.value);
    // }
    // const avatarSetter = (e) => {
    //     setAvatar(e.target.value);
    // }
    // const sleepsSetter = (e) => {
    //     setSleeps(e.target.value);
    // }
    // const currentpriceSetter = (e) => {
    //     setCurrentPrice(e.target.value);
    // }
    // const facilitiesSetter = (e) => {
    //     setFacilities(e.target.value);
    // }
    // const descriptionSetter = (e) => {
    //     setDescription(e.target.value);
    // }

    // const loadRoom = async () => {
    //     const id = match.params.id;
    //     await axios
    //         .get('http://localhost:8070/Room/get/' + id)
    //         .then((res) => {
    //             console.log(res.data.room);
    //             setRoom(res.data.room);
    //         })
    //         .catch((err) => {
    //             alert(err.message);
    //         });
    // };

    return (
        <div>
            <br></br>
            <div className="row1">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form method="post" className="card" id="room">
                                <br/>
                                <h2 className="text-center">View Room</h2>
                                <br/>
                                <div className="container   ">

                                    <div className="" id='group'>
                                        <br/>

                                        <div><label for="type">Room Type</label>

                                            <li className="form-control">{Room.RoomType}</li>
                                        </div>

                                        <div><label>Room Image</label></div>

                                        <div>
                                            <label className="">
                                                <img className="r" src={Room.avatar}/>
                                            </label>
                                        </div>

                                        <div><label>Sleeps</label><input id='left' className="form-control" type="text" placeholder={Room.Sleeps}
                                                                         /></div>
                                        <div><label>Current Price</label><input className="form-control" type="text" placeholder={Room.CurrentPrice}
                                                                                /></div>
                                        <div><label>Facilities</label><textarea id="w3review" className="form-control" rows="4" cols="50" placeholder={Room.Facilities}
                                                                                /></div>
                                        <div><label>Description</label><textarea id="w3review" className="form-control" rows="4" cols="50" placeholder={Room.Description}
                                                                                 /></div>
                                        <br/>
                                        <a href={"/UpdateRooms"} className="btn btn-warning" id='war' type="reset">Update Room</a>
                                        <button className="btn btn-danger" type="reset" id='danger' onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this room details?")) {
                                                deleteRoom()
                                            };
                                        }}>Delete Room</button>
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
export default ViewRooms;