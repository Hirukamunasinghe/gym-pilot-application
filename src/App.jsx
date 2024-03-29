// import modules
import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Scan from './components/Scan';
import Results from './components/Results';
// import Equip from './components/Equip';
import Equip from './components/Equip';
import Workout from './components/Workout';
import WorkResults from './components/WorkResults';
import Rescan from './components/Rescan';
// import Progress from './components/Progress';
// import Final from './components/Final';

// App function
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/scan' element={<Scan />}
          />
          <Route
            path='/results' element={<Results />}
          />
          <Route
            path='/workout' element={<Workout />}
          />
          {/* Define the route for WorkResults with parameter */}
          <Route path="/workoutresult/:workoutId" element={<WorkResults />} 
          />
          {/* <Route
            path='/final' element={<Final />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;






