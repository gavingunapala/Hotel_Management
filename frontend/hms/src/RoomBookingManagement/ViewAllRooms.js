import React, {useState, useEffect} from "react";
import Search from "../Common/Search";
import img from '../Images/christopher-jolly-GqbU78bdJFM-unsplash.jpg'
import '../CSS/RoomBookingManagement/ViewAllRooms.css'
import {Link} from "react-router-dom";


const ViewAllRooms = () => {
    const [Room, setRoom] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            const res = await fetch(`http://localhost:8070/Room/`);
            const data = await res.json();
            setRoom(data);
        };
        getRooms();
    }, []);

    console.log(Room)

    return (
        <div>
            <a className="btn btn-default foodPrices" href={"/RoomBookingDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
            </a>
            <Search />
            <br/><br />

            <div className="center" id="all" style={{marginLeft: "30px"}} >
                {Room?.map((Room) => (
                <div className="blog-card" key={Room._id} >
                    <div className="roomLabels"></div>
                    <Link class="" role="button" to={`/ViewOneRoom/${Room._id}`} >
                    <embed src={Room.avatar} href=""
                           alt="img" width={"100%"}
                           height={150} width={200}/>
                    </Link>
                    <br/>
                    <div><label htmlFor="type">{Room.RoomType}</label></div>

                    <div><label htmlFor="type">LKR {Room.CurrentPrice}</label></div>
                    <div className="p-2 ">
                        <br/>
                    </div>
                </div>
                ))}
            </div>

        </div>
    );
}
export default ViewAllRooms;
