import './App.css';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Personal from './Personal';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;