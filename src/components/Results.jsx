import React, { useState } from "react";
import liftone from './liftone.jpg';
import lifttwo from './lifttwo.jpg';
import { Link } from "react-router-dom";
import { DropdownList } from 'react-widgets';

const Results =() =>{
    return(
        <div className="resultsDiv">
            <h1 className="text-3xl font-bold text-black ">IDENTIFIED RESULTS</h1>
            
            <div className="results-images">
                <img className="image cursor-pointer h-72 w-72" src={liftone} alt=""/>
                <img className="image cursor-pointer h-72 w-72" src={lifttwo} alt=""/>
            </div>
            <Link to="/scan">
            <button className="scanBtn text-white">RESCAN</button>
            </Link>
            <Link to="/workout">
            <button className="scanBtn eqbtn text-white">HOME WORKOUT</button>
            </Link>
        </div>
    )
}

export default Results;