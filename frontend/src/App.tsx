import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UploadCredential from './pages/UploadCredential';
import VerifyCredential from './pages/VerifyCredential';
import ViewNFTs from './pages/ViewNFTs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<UploadCredential />} />
          <Route path="/verify" element={<VerifyCredential />} />
          <Route path="/nfts" element={<ViewNFTs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;