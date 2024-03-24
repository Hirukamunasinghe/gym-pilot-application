// Importing necessary modules from React Router
import React from 'react';
import { useNavigate } from 'react-router-dom';// Importing useNavigate hook from React Router

// Functional component for the Rescan page
const Rescan = () => {
    const navigate = useNavigate();
  
    const handleRescan = () => {
      navigate('/scan');
    };
  
    return (
      <div className="rescanDiv">
        <p>This is not a gym equipment.</p>
        <button onClick={handleRescan} className="rescanBtn">Rescan</button>
      </div>
    );
  };

export default Rescan;