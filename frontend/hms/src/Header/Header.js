import React from "react";
import '../CSS/Header/Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
                {/*<a href="https://icons8.com/icon/44053/star"></a>*/}
                <div className="container">
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <img src="https://img.icons8.com/nolan/64/star.png"/>
                            {/*<li className="nav-item"><a className="nav-link" href="#"><i*/}
                            {/*    className="fa fa-apple apple-logo"></i></a></li>*/}
                            <li className="company-name">Fortune Inn & Suites</li>
                            <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Watch</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">TV</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Music</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">
                                <i className="icon ion-ios-search-strong"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-shopping-bag"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default Header;
