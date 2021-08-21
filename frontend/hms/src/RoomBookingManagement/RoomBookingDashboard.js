import React, { useState, useEffect } from "react";
import '../CSS/RoomBookingManagement/ManageRoomsDashboard.css';
import AdminSideNav from "../Admin/AdminSideNav";
import {Link} from "react-router-dom";


const RoomBookingDashboard = () => {

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

                    <button className="btn btn-success btngenarate" type="submit" >Generate Report</button>
                </div>

                <div class="row1">
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table1  table-hover table-bordered table-striped  tablesorter" id="ipi-table">
                                <thead class="thead-dark">
                                <tr>
                                    <th class="text-center">Room Type</th>
                                    <th className="text-center col-lg-3">Check In Date</th>
                                    <th class="text-center">Check Out Date</th>
                                    <th className="text-center">No Of People</th>
                                    <th class="text-center filter-false sorter-false ">Actions</th>
                                </tr>

                                </thead>
                                <tbody class="text-center">

                                        <tr>
                                            <td>Premium Double Room</td>
                                            <td>2021/08/30</td>
                                            <td>2021/09/01</td>
                                            <td>3</td>

                                            <br />
                                            <Link class="btn btn-primary" role="button" >
                                                <em className="fa fa-eye"  id="icon"></em>
                                            </Link>
                                            <Link class="btn btn-success" role="button" >
                                                <em className="fa fa-edit" id="icon"></em>
                                            </Link>
                                            <a className="btn btn-danger" id="icon">
                                                <em className="fa fa-trash"/></a>
                                            <br /><br />
                                        </tr>
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
