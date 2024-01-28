import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Scan from './components/Scan';
import Results from './components/Results';
import Equip from './components/Equip';
import Progress from './components/Progress';
import Final from './components/Final';

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
            path='/equip' element={<Equip />}
          />
          <Route
            path='/progress' element={<Progress />}
          />
          <Route
            path='/final' element={<Final />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
