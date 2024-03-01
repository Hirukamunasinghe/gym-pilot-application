import React from "react";
import eqone from './eq1.png';
import eqtwo from './eq2.png';
import eqthree from './eq3.png';
import eqfour from './eq4.png';
import eqfive from './eq5.png';
import eqsix from './eq6.png';
import eqseven from './eq7.png';
import eqeight from './eq8.png';
import { Link } from "react-router-dom";

const Equip = () => {
  return (
    <div className="eq-div">
        <h1 className="e-heading text-3xl font-bold text-black">Select Equipment</h1>
      <div className="cards-div">
        <div className="card">
            <Link to="/scan">
            <img src={eqone} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqtwo} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqthree} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqfour} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqfive} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqsix} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqseven} className="eqimage" alt=""/>
            </Link>
        </div>
        <div className="card">
            <Link to="/scan">
            <img src={eqeight} className="eqimage" alt=""/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Equip;
