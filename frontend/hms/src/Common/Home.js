import React from 'react';
import food from "../Images/homeFood.jpg";
import bed from "../Images/homeRoom.jpg";

const Home = () => {
    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6">
                        <a href="/ViewAllRooms" style={{color: 'inherit', textDecoration: 'none'}}>
                        <div className='card'>
                            <div className='homeCard '>
                                <img src={bed} loading="auto" alt="center" height="500"
                                     width="560" border='20'/>
                                     <br /><br />
                                     <div className='text-center'>
                                    <h3 className='btn btn-primary'>Book Rooms</h3>
                                     </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="/customerViewFood" style={{color: 'inherit', textDecoration: 'none'}}>
                        <div className='card'>
                            <div className='homeCard'>
                                <img src={food} loading="auto" alt="center" height="500"
                                     width="560" border='20'/>
                                     <br /><br />
                                <div className='text-center'>
                                     <h3 className='btn btn-primary'>Order Food</h3>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
