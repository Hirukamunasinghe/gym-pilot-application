import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
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
          <img src={dataUri} alt="Scanned Image" className="scanImage" />
          <h3 className="warning">Please make sure your image is centered</h3>
          <Link to="/results">
          <button className="scanBtn">Results</button>
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
