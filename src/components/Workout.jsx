import React from "react";
import {Link} from "react-router-dom";
import w1 from './push1.jpg';
import w2 from './push2.jpg';
import w3 from './w3.jpg';
import w4 from './push3.jpg';

const Workout =() =>{
    return(
        <div>
            <h1 className="text-4xl font-bold text-red-700 text-center">HOME WORKOUT</h1>
            <div className="images-div grid grid-cols-1 gap-5 my-5">
                <Link to="/workoutresult/3">
                <img className="image cursor-pointer h-72 w-72 lg:w-full"src={w1} alt="Workout 1" />
                </Link>
                <Link to="/workoutresult/2">
                <img className="image cursor-pointer h-72 w-72 lg:w-full" src={w2} />
                </Link>
                <Link to="/workoutresult/1">
                <img className="image cursor-pointer h-72 w-72 lg:w-full" src={w3} />
                </Link>
                <Link to="/workoutresult/4">
                <img className="image cursor-pointer h-72 w-72 lg:w-full" src={w4} />
                </Link>
            </div>
        </div>
    )
}

export default Workout;

