import React, {useState} from 'react';
import img from '../Images/undraw_Sync_files_re_ws4c.png';
import '../CSS/Room_Management/AddRooms.css';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import ProgressBar from "../comps/ProgressBar.js";
import '../CSS/ProgressBar/ProgressBar.css'

const AddRooms = () => {

    const history = useHistory();

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

    const onSubmit = (e) => {
        e.preventDefault();
        const newRoom = {
            RoomType: RoomType,
            avatar: url,
            Sleeps: Sleeps,
            CurrentPrice: CurrentPrice,
            Facilities:Facilities,
            Description:Description

        };
        axios.post('http://localhost:8070/Room/add', newRoom).then(() => {
            alert("New Room added successfully!");
            console.log(url);
            history.push('/ManageRoomsDashboard');
        }).catch((err) => {
            alert(err);
        })
    }
    console.log(url);

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
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form method="post" className="card" id="room" style={{opacity: '0.95'}}>
                                <br/>
                                <h2 className="text-center">Add Rooms</h2>
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
                                        <div><label>Room Image</label></div>
                                        <div>
                                        <label className={"mylabel"}>
                                            <input type="file" onChange={handleChange} />
                                            <i id="image" className="fa fa-plus-circle" size="large" style={{marginLeft:"146px",color:"#2d6cdf"}} />
                                        </label>
                                            <img width="320px" src={url} />
                                        <div className="output">
                                            {error && <div className="error">{ error }</div>}
                                            {file && <div>{ file.name }</div> }
                                            {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl}/> }
                                            {file && <div> {file.url}</div>}
                                        </div>
                                        </div>
                                        <div><label>Sleeps</label><input id='left' className="form-control" type="number" onChange={sleepsSetter} /></div>
                                        <div><label>Current Price</label><input className="form-control" type="text" onChange={currentpriceSetter} /></div>
                                        <div><label>Facilities</label><textarea id="w3review" className="form-control" rows="4" cols="50" onChange={facilitiesSetter} /></div>
                                        <div><label>Description</label><textarea id="w3review" className="form-control" rows="4" cols="50" onChange={descriptionSetter} /></div>
                                        <br/>
                                        <button className="btn btn-primary" type="submit" id="addrooms" onClick={onSubmit} style={{width:"113px"}}>&nbsp;Add Rooms</button>&nbsp;&nbsp;
                                        <br/>
                                        <br/>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={img} loading="auto" style={{marginLeft: "-53px", marginTop: "179px" }} height="653px" width="609px"/>
                </div>
            </div>
        </div>
    )
}
export default AddRooms;