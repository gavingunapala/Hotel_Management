import React, {useState, useEffect} from "react";
import Search from "../Common/Search";
import img from '../Images/christopher-jolly-GqbU78bdJFM-unsplash.jpg'
import '../CSS/RoomBookingManagement/ViewAllRooms.css'
import {Link} from "react-router-dom";


const ViewAllRooms = () => {

    return (
        <div>
            <a className="btn btn-default foodPrices" href={"/RoomBookingDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Home</i>
            </a>
            <Search />
            <br/><br />

            <div className="center" style={{marginLeft: "100px"}} >
                <div className="blog-card" >
                    <div className="roomLabels"></div>
                    <Link class="" role="button" to="/ViewOneRoom" >
                    <embed src={img} href=""
                           alt="img" width={"100%"}
                           height={150} width={"auto"}/>
                    </Link>
                    <br/>
                    <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                    <div className="p-2 ">
                        <br/>
                    </div>
                </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            <div className="blog-card" >
                <div className="roomLabels"></div>
                <embed src={img} href=""
                       alt="img" width={"100%"}
                       height={150} width={"auto"}/>
                <br/>
                <div><label htmlFor="type">Superior Twin - LKR 18000</label></div>
                <div className="p-2 ">
                    <br/>
                </div>
            </div>
            </div>

        </div>
    );
}
export default ViewAllRooms;
