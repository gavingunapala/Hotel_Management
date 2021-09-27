import React,{useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import '../CSS/Admin/tableEmployee.css';
import jsPDF from "jspdf";

const GenerateFoodReport = () => {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;

    let his = useHistory();
    const [Food, setFood] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

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

    const genaratePDF=()=>{
        let doc =new jsPDF('p','pt','a1');
        doc.html(document.querySelector('#body'),{
            callback:function (doc) {
                doc.save('FoodReport.pdf');
            },
            margin:[60,60,60,60],
            x:32,
            y:32
        });

    }


    return (
        <div>
            <a className="btn btn-default foodPrices" href={"/foodManagement"} >
                <i className="fa fa-arrow-left" style={{fontWeight: "bold"}}> </i> Back
            </a>
            <br />
            <div className="searchBar">
                <input type="search" className="form-control" placeholder="Search..." onChange={event =>{setSearchWord(event.target.value)}}/>
            </div>
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
                                            <th className="text-center">Food ID</th>
                                            <th className="text-center col-lg-4">Food Code</th>
                                            <th className="text-center">Food Name</th>
                                            <th className="text-center">Unit Price</th>

                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {Food.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())|| val.Code.toLowerCase().includes(SearchWord.toLowerCase())) {
                                                return val
                                            }
                                        }).map((food) => {
                                            return (
                                                <tr>
                                                    <td>{food._id}</td>
                                                    <td>{food.Code}</td>
                                                    <td>{food.Name}</td>
                                                    <td>Rs. {food.Price}.00</td>
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
export default GenerateFoodReport;
