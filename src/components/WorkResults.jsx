// WorkResults.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ex1 from "./exercise1.mp4";
import ex2 from "./exercise2.mp4";
import ex3 from "./exercise3.mp4";
import ex4 from "./exercise4.mp4";

const WorkResults = () => {
  const { workoutId } = useParams();

  const files = {
    1: ex1,
    2: ex2,
    3: ex3,
    4: ex4
  };

  // Checking if the video source exists - videoSource
  const videoSource = files[workoutId];
  //If the videoSource is available, video is rendered. Else, null is returned.
  const video = videoSource ? (
    <video controls>
      <source src={videoSource} type="video/mp4" />
    </video>
  ) : null;

  return (
    <div>
      <h1 className="text-4xl font-bold text-red-700 text-center">WORKOUT RESULT</h1>
      {video}
    </div>
  );
};

export default WorkResults;
