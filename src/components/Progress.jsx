import React from "react";
import lw from './lw.png';
import mw from './mw.png';
import hw from './hw.png';
import { Link } from "react-router-dom";

const Progress = () =>{
    return(
        <div className="progressDiv">
            <h1 className="proheading text-3xl font-bold text-black">PROGRESS VISUALIZATION</h1>
            <div className="progress-card-div">
                <div className="prog-card">
                    <Link to="/final">
                    <img src={lw} className="proimage" alt=""/>
                    </Link>
                    <h4 className="propara">Lightweight <br/>20KG-60KG</h4>
                </div>
                <div className="prog-card">
                    <Link to="/final">
                    <img src={mw} className="proimage" alt=""/>
                    </Link>
                    <h4 className="propara">Middleweight <br/>61KG-72KG</h4>
                </div>
                <div className="prog-card">
                    <Link to="/final">
                    <img src={hw} className="proimage" alt=""/>
                    </Link>
                    <h4 className="propara">Heavyweight <br/>Above 72KG</h4>
                </div>
            </div>
        </div>
    )
}

export default Progress;