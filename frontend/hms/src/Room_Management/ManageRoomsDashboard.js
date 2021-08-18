import React from 'react';
// import img from '../Images/undraw_Sync_files_re_ws4c.png';
import '../CSS/Room_Management/ManageRoomsDashboard.css';


const ManageRoomsDashboard = () => {
    return (
        <div>
            <br/><br/>

            <div class="container-fluid">
                <div class="row">

                    <div class="col-12 col-sm-6 col-md-6">
                        <a class="btn btn-primary" role="button">
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
                                    <th class="text-center">Room Code</th>
                                    <th class="text-center">Room Type</th>
                                    <th class="text-center">Sleeps</th>
                                    <th className="text-center">Price</th>
                                    <th class="text-center filter-false sorter-false">Actions</th>
                                </tr>
                                </thead>
                                <tbody class="text-center">
                                <tr>
                                    <td>Ana</td>
                                    <td>Diseñador</td>
                                    <td>Diseño</td>
                                    <td>Diseño</td>
                                    <td class="text-center">
                                        <a class="btn btn-primary" role="button" >
                                        <i class="far fa-eye"></i>
                                        </a>
                                        <a class="btn btn-success" role="button" >
                                            <i class="fas fa-pencil-alt"></i>
                                        </a>
                                        <a class="btn btn-danger" role="button">
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fer<br/></td>
                                    <td>Desarrollador</td>
                                    <td>Development</td>
                                    <td>Diseño</td>
                                    <td class="text-center">
                                        <a class="btn btn-primary" role="button">
                                            <i class="far fa-eye"></i>
                                        </a>
                                        <a class="btn btn-success" role="button" >
                                            <i class="fas fa-pencil-alt"></i>
                                        </a>
                                        <a class="btn btn-danger" role="button" >
                                            <i class="fas fa-trash"></i>
                                        </a>
                                    </td>
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
export default ManageRoomsDashboard;
