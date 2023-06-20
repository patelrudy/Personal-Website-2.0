import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* add this */}
          {/* Add additional Routes for other pages here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
