import React, { useState } from "react";
import liftone from './liftone.jpg';
import lifttwo from './lifttwo.jpg';
import { Link } from "react-router-dom";

const Results =() =>{
    return(
        <div className="resultsDiv">
            <h1>IDENTIFIED RESULTS</h1>
            <div className="results-images">
                <img className="image" src={liftone} alt=""/>
                <img className="image" src={lifttwo} alt=""/>
            </div>
            <Link to="/scan">
            <button className="scanBtn">RESCAN</button>
            </Link>
            <button className="scanBtn eqbtn">EQUIPMENT PAGE</button>
        </div>
    )
}

export default Results;