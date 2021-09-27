import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import '../CSS/Admin/tableEmployee.css';
import jsPDF from "jspdf";

const RoomManagementReport = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    let his = useHistory();
    const [Room, setRoom] = useState([]);

    //get room details
    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getRoom() {
            axios
                .get("http://localhost:8070/Room/")
                .then((res) => {
                    setRoom(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }

        getRoom();
    }, []);

    const genaratePDF=()=>{
        let doc =new jsPDF('p','pt','a1');
        doc.html(document.querySelector('#body'),{
            callback:function (doc) {
                doc.save('Room Management Report.pdf');
            },
            margin:[60,60,60,60],
            x:32,
            y:32
        });

    }


    return (
        <div>
            <a className="btn btn-default foodPrices" href={"/ManageRoomsDashboard"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> Back</i>
            </a>
            <div className="row1" id={'body'}>
                <br></br>
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
                                            <th className="text-center col-lg-2">Room Type</th>
                                            <th className="text-center col-lg-2">Sleeps</th>
                                            <th className="text-center col-lg-2">Current Price</th>
                                            <th className="text-center col-lg-3">Facilities</th>
                                            <th className="text-center col-lg-3">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {Room.map((Room) => {
                                            return (
                                                <tr>
                                                    <td>{Room.RoomType}</td>
                                                    <td>{Room.Sleeps}</td>
                                                    <td>{Room.CurrentPrice}</td>
                                                    <td>{Room.Facilities}</td>
                                                    <td>{Room.Description}</td>
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
export default RoomManagementReport;
