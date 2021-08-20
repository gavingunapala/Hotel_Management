import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import AdminSideNav from "../Admin/AdminSideNav";
import '../CSS/Admin/tableEmployee.css';
import Search from "../Common/Search";


const FoodManagement = () => {


    let his = useHistory();
    const [Food, setFood] = useState([]);

    useEffect(() => {

        function getFood() {
            axios.get("http://localhost:8070/food" ).then((res) => {
                setFood(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getFood();
    }, [Food]);


    const deleteFood = (id) =>{
        axios.delete('http://localhost:8070/food/delete/' + id).then(()=>{
            alert("Food item deleted successfully!!");
        }).catch((err)=>{
            alert(err);
        })
    };

    return (
        <div className="row1">
            <div className="col-2"> <AdminSideNav/></div>
            <div className="col-10"> <br/>
                <Search/>
                <div className="">
                    <div className="row1">

                        <div className="col-12 col-sm-6 col-md-6">
                        </div>
                        <span className="counter pull-right"></span>
                        <br/><br/>
                    </div>


                    <a href="/addFood" className="btn btn-primary" role="button">
                        <i className="fa fa-plus"></i>Add New Food
                    </a>
                    <button className="btn btn-success btngena" type="submit" >Generate Report</button>


                    <br /><br />
                    <div className="row1">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                       id="ipi-table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Code</th>
                                        <th className="text-center ">Name</th>
                                        <th className="text-center col-lg-4">Image</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Actions</th>

                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {Food.map((food) => {
                                        return (
                                            <tr>
                                                <td>{food.Code}</td>
                                                <td>{food.Name}</td>
                                                <td>{food.Image}</td>
                                                <td>{food.Price}</td>
                                                <br />

                                                <Link className="btn btn-success" role="button" to={`/update/${food._id}`} style={{marginRight:"10px"}}>
                                                    <em className="fa fa-edit" id="icon"></em>
                                                </Link>
                                                <a className="btn btn-danger" id="icon">
                                                    <em className="fa fa-trash"
                                                        onClick={() => {
                                                            if (window.confirm("Are you sure you want to delete this food item?")) {
                                                                deleteFood(food._id)
                                                            }
                                                            ;
                                                        }}/></a>
                                                <br /><br />
                                            </tr>
                                        );
                                    })};

                                    </tbody>
                                </table>
                                {/*<button className="btn btn-primary">*/}
                                {/*    <Link to="/">+ Back to Home</Link>*/}
                                {/*</button>*/}
                                <div className="col-12 col-sm-6 col-md-6">
                                    <a href="/" className="btn btn-primary" role="button">
                                        <i className="fa fa-plus"></i>Back to Home
                                    </a>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}
export default FoodManagement;
