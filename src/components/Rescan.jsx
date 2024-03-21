import React from 'react';
import { useNavigate } from 'react-router-dom';

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