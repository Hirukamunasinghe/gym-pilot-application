// Home.jsx
import React from "react";
import { Link } from "react-router-dom";// Importing Link component from React Router
import logo from './logo.png';


// Functional component for the Home page
const Home = () => {
    return (
        <div className="homeDiv grid">
             <img className="logo h-72 sm:h-28 md:h-96 lg:h-96" src={logo} alt="" />
            <div className="imgScanner"></div>
            <Link to="/scan">
                <button className="scanBtn text-white">Scan</button>
            </Link>
            <Link to="/workout">
                <button className="scanBtn text-white">Home Workout</button>
            </Link>
    
        </div>
        
    )
}
export default Home;