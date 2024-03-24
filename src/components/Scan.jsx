import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo'; // Importing the Camera component from react-html5-camera-photo library
import 'react-html5-camera-photo/build/css/index.css';
import { Link } from "react-router-dom";

const Scan = () => {
  const [dataUri, setDataUri] = useState(null);

  const handleTakePhoto = (dataUri) => {
    setDataUri(dataUri);
  };

  

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
