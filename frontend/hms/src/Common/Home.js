import React, {useEffect, useState} from 'react';
import food from "../Images/homeFood.jpg";
import bed from "../Images/homeRoom.jpg";
import Greeting from "../Login/Greeting";

const Home = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const[userId, setUserId] = useState('');
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if(loggedInUser != null){
            setUserId(loggedInUser);
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div>
            <br />
            <Greeting isLoggedIn={isLoggedIn} />
            <br /><br /><br />
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
                                    <h3 className='btn qtyAdd'>BOOK ROOMS</h3>
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
                                     <h3 className='btn qtyAdd'>ORDER FOOD</h3>
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
