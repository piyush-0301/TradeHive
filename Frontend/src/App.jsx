import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your pages (check paths)
import Signup from './landingPage/signup/Signup';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';

const Dashboard = () => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <h1>Welcome to TradeHive Dashboard</h1>
    <p>Signup Successful!</p>
  </div>
);
// Mock Dashboard (or import your actual Dashboard component)
const Dashboard = () => <div style={{padding: '50px', textAlign: 'center'}}><h1>Welcome to TradeHive Dashboard</h1></div>;

function App() {
  return (
    <Router>
      <Navbar /> {/* This shows on every page */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> {/* This shows   on every page */}
    </Router>
  );
}

export default App;