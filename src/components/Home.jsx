// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';


const Home = () => {
    return (
        <div className="homeDiv grid">
            <img className="logo" src={logo} alt="" />
            <div className="imgScanner"></div>
            <Link to="/equip">
                <button className="scanBtn text-white">Scan</button>
            </Link>
        </div>
    )
}

export default Home;