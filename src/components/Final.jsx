// Importing necessary modules from React and React Router

import React from "react";
import { Link } from "react-router-dom"; // Importing Link component from React Router
import body from './fresult.png' // Importing image for body visualization

// Functional component for the Final page
const Final = () =>{
    return(
        <div className="final-pg-div">
            <h1 className="text-3xl font-bold text-black">VISUALIZATION RESULTS</h1>
            <h3 className="des">This visualized AI Avatar displays how your body will<br/> be in a couple of months<br/> if you have completed<br/> this exercise accurately</h3>
            <img src={body} className="bodyimage" alt=""/>
            <Link to="/">
            <button className="finalbtn">HOME</button>
            </Link>
        </div>
    )
}

export default Final; // Exporting the component for use in other files
