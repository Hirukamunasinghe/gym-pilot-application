import React, { useState } from "react";
// import liftone from './liftone.jpg';
import lifttwo from './lifttwo.jpg';
import exone from './ex1.gif';
import { Link } from "react-router-dom";

const Results =() =>{
    return(
        <div className="resultsDiv" id="finalresult">
            <h1 className="text-3xl font-bold text-black ">IDENTIFIED RESULTS</h1>
            
            <div className="results-images">
                <img className="image cursor-pointer h-72 w-72" src={exone} alt=""/>
                <img className="image cursor-pointer h-72 w-72" src={lifttwo} alt=""/>
            </div>
            <Link to="/scan">
            <button className="scanBtn text-white">RESCAN</button>
            </Link>
            <Link to="/">
            <button className="scanBtn text-white">HOME</button>
            </Link>

        </div>
    )
}

export default Results;