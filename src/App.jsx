import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Home/HomeComponents';
import Footer from './Components/Footer/FooterComponent';
import Home from './Components/Home/HomeComponents';
import Banner from './Components/Banner/Banner';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
