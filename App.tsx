
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './src/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fees from './pages/Fees';
import Classrooms from './pages/Classrooms';
import BusFacilities from './pages/BusFacilities';
import Faculty from './pages/Faculty';
import Games from './pages/Games';
import SafetyReporting from './pages/SafetyReporting';
import Policies from './pages/Policies';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/classrooms" element={<Classrooms />} />
            <Route path="/bus" element={<BusFacilities />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/games" element={<Games />} />
            <Route path="/safety" element={<SafetyReporting />} />
            <Route path="/policies" element={<Policies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
