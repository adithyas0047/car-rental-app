// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/search';
import CarDetailsPage from './components/cardetailspage';
import PaymentPage from './components/paymentpage';
import PaymentSuccessPage from './components/paymentsuccessfulpage'; // Import the new component
import './components/style.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/car-details/:id" element={<CarDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} /> {/* Add route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
