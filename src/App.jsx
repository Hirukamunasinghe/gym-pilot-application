import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Scan from './components/Scan';
import Results from './components/Results';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
