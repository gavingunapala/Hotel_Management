import React,{useEffect, useState} from 'react';
import img from '../Images/undraw_Forms_re_pkrt.png';
import '../CSS/Room_Management/UpdateRooms.css';
import {useHistory} from "react-router-dom";
import axios from "axios";
import ProgressBar from "../comps/ProgressBar";

const UpdateRooms = ({match}) => {
    console.log(match.params.id);
    const id = match.params.id;
    console.log(id)

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image(.png, .jpeg, .jpg)');
        }
    };


    console.log(id)
    let his = useHistory();

    const [Room, setRoom] = useState([]);

    const [RoomType, setRoomType] = useState("");
    const [avatar, setAvatar] = useState("");
    const [Sleeps, setSleeps] = useState("");
    const [CurrentPrice, setCurrentPrice] = useState(null);
    const [Facilities, setFacilities] = useState(null);
    const [Description, setDescription] = useState(null);


    const roomtypeSetter = (e) => {
        setRoomType(e.target.value);
    }
    const avatarSetter = (e) => {
        setAvatar(e.target.value);
    }
    const sleepsSetter = (e) => {
        setSleeps(e.target.value);
    }
    const currentpriceSetter = (e) => {
        setCurrentPrice(e.target.value);
    }
    const facilitiesSetter = (e) => {
        setFacilities(e.target.value);
    }
    const descriptionSetter = (e) => {
        setDescription(e.target.value);
    }

 //get room details
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

    const onSubmit = (e) => {
        e.preventDefault();
        const UpdateRoom = {
            RoomType: RoomType,
            avatar: url,
            Sleeps: Sleeps,
            CurrentPrice: CurrentPrice,
            Facilities:Facilities,
            Description:Description
        };
        his.push('/ViewRooms');
        axios.put('http://localhost:8070/Room/updateOne/' + id, UpdateRoom).then(() => {
            alert("Room details Updated successfully!!!");
        }).catch((err) => {
            alert(err);
        })
        his.push('/ManageRoomsDashboard');
    }

    return (
        <div>
            <br></br>
            <a className="btn btn-default foodPrices" href={"/ManageRoomsDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>
            <div className="row">
                <div className="col-sm-2"></div>
                <div class=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div class=" justify-content-center align-items-center">
                        <div>
                            <form method="post" class="card" id='upd'>
                                <br/>
                                <h2 className="text-center">Update Rooms</h2>
                                <br/>
                                <div className="container   ">
                                    <div class="form-group">
                                        <br/>
                                        <div><label htmlFor="type">Room Type</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" onChange={roomtypeSetter} placeholder={Room.RoomType}>
                                                <option>Choose</option>
                                                <option>Premium Double Room</option>
                                                <option>Cilantro Suite</option>
                                                <option>Executive Room with Lounge Access</option>
                                                <option>Superior Twin Room</option>
                                                <option>Superior King Room</option>
                                            </select>
                                        </div>
                                        <div><label>Room Image</label>
                                            <div>
                                                <label className={"mylabel"}>
                                                    <input type="file" onChange={handleChange} />
                                                    <span>+</span>
                                                </label>
                                                <div className="output">
                                                    {error && <div className="error">{ error }</div>}
                                                    {file && <div>{ file.name }</div> }
                                                    {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/> }
                                                    {file && <div> {file.url}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div><label>Sleeps</label><input class="form-control" type="number" onChange={sleepsSetter} placeholder={Room.Sleeps} /></div>
                                        <div><label>Current Price</label><input class="form-control" type="number" onChange={currentpriceSetter} placeholder={Room.CurrentPrice} /></div>
                                        <div><label>Facilities</label><input class="form-control" type="text" onChange={facilitiesSetter} placeholder={Room.Facilities} /></div>
                                        <div><label>Description</label><textarea id="w3review" className="form-control" rows="4" cols="50" onChange={descriptionSetter} placeholder={Room.Description} /></div>
                                        <br/>
                                        <button className="btn btn-warning" type="submit" id="updaterooms" onClick={onSubmit}>&nbsp;Update Room</button>&nbsp;&nbsp;
                                        <br/>
                                        <br/>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={img} loading="auto" alt="center" height="700" width="600"/>
                </div>


            </div>
        </div>
    )
}
export default UpdateRooms;