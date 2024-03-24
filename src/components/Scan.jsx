import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo'; // Importing the Camera component from react-html5-camera-photo library
import 'react-html5-camera-photo/build/css/index.css';// Importing the CSS for the Camera component
import { Link } from "react-router-dom";// Importing the Link component from react-router-dom library

const Scan = () => {
  const [dataUri, setDataUri] = useState(null);// Using the useState hook to create a state variable dataUri and a function setDataUri to update it


  const handleTakePhoto = (dataUri) => { // Defining a function handleTakePhoto that takes a dataUri parameter
    setDataUri(dataUri); // Setting the dataUri state variable to the provided dataUri
  };

  
// The component returns JSX code to render
  return (
    <div className="scanDiv">
      {dataUri ? (
        <div className="scanDiv">
          <img src={dataUri} alt="Scanned Image" className="scanImage" id="scanimage"/>
          <h3 className="text-1xl my-10 text-red-400 font-bold text-md">Please make sure your image is centered</h3>
          <Link to="/results">
          <button className="scanBtn text-white" id="Results">Results</button>
          </Link>
        </div>
      ) : (
        // Camera options
        <Camera
          onTakePhoto={(dataUri) => handleTakePhoto(dataUri)}
          idealFacingMode={FACING_MODES.ENVIRONMENT}
          idealResolution={{ width: 600, height: 500 }}
          imageType={IMAGE_TYPES.JPG}
          imageCompression={0.97}
          isMaxResolution={true}
          isImageMirror={false}
          isSilentMode={false}
          isDisplayStartCameraError={true}
        />
      )}
    </div>
  );
};

export default Scan;
