import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Events from './pages/Events';
import Sports from './pages/Sports';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;