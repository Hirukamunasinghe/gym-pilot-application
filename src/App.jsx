import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Scan from './components/Scan';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
