import React from "react";
import { Link } from "react-router-dom";
import body from './fresult.png'


const Final = () =>{
    return(
        <div className="final-pg-div">
            <h1>VISUALIZATION RESULTS</h1>
            <h3 className="des">This visualized AI Avatar displays how your body will<br/> be in a couple of months<br/> if you have completed<br/> this exercise accurately</h3>
            <img src={body} className="bodyimage" alt=""/>
            <Link to="/">
            <button className="finalbtn">HOME</button>
            </Link>
        </div>
    )
}

export default Final;