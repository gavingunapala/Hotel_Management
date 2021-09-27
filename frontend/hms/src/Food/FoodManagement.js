import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import AdminSideNav from "../Admin/AdminSideNav";
import '../CSS/Admin/tableEmployee.css';
import Search from "../Common/Search";
import jsPDF from "jspdf";


const FoodManagement = () => {

    let his = useHistory();
    const [Food, setFood] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    useEffect(() => {

        function getFood() {
            axios.get("http://localhost:8070/food" ).then((res) => {
                setFood(res.data);
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
                <div className="col-xs-6">
                    <div className="searchBar">
                        <input type="search" className="form-control" placeholder="Search..." onChange={event =>{setSearchWord(event.target.value)}}/>
                    </div>
                </div>
                <div className="">
                    <div className="row1">

                        <div className="col-12 col-sm-6 col-md-6">
                        </div>
                        <span className="counter pull-right"></span>
                        <br/><br/>
                    </div>


                    <a href="/addFood" className="btn btn-primary" role="button" style={{fontWeight: "bold"}}>
                        <i className="fa fa-plus"></i> Add New Food
                    </a>
                    <a href={"/FoodReport"} className="btn btn-success btngena" type="submit" style={{fontWeight: "bold"}} >Generate Report</a>


                    <br /><br />
                    <div className="row1">
                        <div className="col-12">
                            <div id="body"  className="table-responsive">
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
                                    {Food.filter((val)=>{
                                        if(SearchWord ==""){
                                        return val
                                    }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase()) || val.Code.toLowerCase().includes(SearchWord.toLowerCase())) {
                                            return val
                                        }
                                    }).map((food) => {
                                        return (
                                            <tr>
                                                <td>{food.Code}</td>
                                                <td>{food.Name}</td>
                                                <td><img width="200px "src={food.Image} /></td>
                                                <td>Rs. {food.Price}.00</td>
                                                <br />
                                                <br />

                                                <Link className="btn btn-success" role="button" to={ `/updateFood/${food._id}`} style={{marginRight:"10px"}}>
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
                                    })}

                                    </tbody>
                                </table>

                                <br/>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}
export default FoodManagement;
