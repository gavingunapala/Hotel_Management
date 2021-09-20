import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import '../CSS/Admin/tableEmployee.css';
import jsPDF from "jspdf";

const RoomBookingManagementReport = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let his = useHistory();
    const [Roombooking, setRoomBooking] = useState([]);

    //get room BOOKING details
    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getRoomBooking() {
            axios
                .get("http://localhost:8070/RoomBooking/")
                .then((res) => {
                    setRoomBooking(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }

        getRoomBooking();
    }, []);

    const genaratePDF=()=>{
        let doc =new jsPDF('p','pt','a1');
        doc.html(document.querySelector('#body'),{
            callback:function (doc) {
                doc.save('Room Booking Management Report.pdf');
            },
            margin:[60,60,60,60],
            x:32,
            y:32
        });

    }


    return (
        <div>
            <div className="row1" id={'body'}>

                <div className="container" >
                    <br></br>

                    <div><label> Fortune Inn & Suites </label>
                    </div>
                    <div><label>{dateTime} </label>
                    </div>

                    <div className="col-11"> <br/>
                        <div className="">
                            <div className="row1">

                                <div className="col-12 col-sm-6 col-md-6">
                                </div>
                                <span className="counter pull-right"></span>
                                <br/>
                            </div></div>
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Room Type</th>
                                            <th className="text-center">No Of People</th>
                                            <th className="text-center col-lg-3">Check In Date</th>
                                            <th className="text-center">Check Out Date</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {Roombooking.map((Roombooking) => {
                                            return (
                                                <tr>
                                                    <td>{Roombooking.RoomType}</td>
                                                    <td>{Roombooking.NoOfPeople}</td>
                                                    <td>{Roombooking.CheckInDate.split('T')[0]}</td>
                                                    <td>{Roombooking.CheckOutDate.split('T')[0]}</td>
                                                    <br />
                                                    <br /><br />
                                                </tr>
                                            );
                                        })}

                                        </tbody>
                                    </table>
                                    <br/>
                                </div>
                            </div>
                        </div></div>

                </div>


            </div>
            <Link className="btn btn-success btngena" role="button" id={"generate"}onClick={genaratePDF}>
                Generate Report&nbsp;&nbsp;
                <em className="fa fa-file-pdf-o" id="icon"></em>
            </Link>
        </div>

    )
}
export default RoomBookingManagementReport;