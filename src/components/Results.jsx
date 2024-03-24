import React, { useState } from "react"; //importing React and usestate hook
//import liftone from './liftone.jpg'; 
import lifttwo from './lifttwo.jpg';//importing another image files 
import { Link } from "react-router-dom";//importing link component from react-router-dom
//importing drop downlist component from react widjets
const Results =() =>{ //declaring a functional component named results
    return(  
        <div className="resultsDiv">
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