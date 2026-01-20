
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Fees from './pages/Fees';
import Classrooms from './pages/Classrooms';
import BusFacilities from './pages/BusFacilities';
import Faculty from './pages/Faculty';
import Games from './pages/Games';
import Profile from './pages/Profile';
import SafetyReporting from './pages/SafetyReporting';
import Policies from './pages/Policies';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('wisly_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('wisly_user', JSON.stringify(userData));
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('wisly_user', JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('wisly_user');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={!user ? <Auth onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/auth" />} />
            <Route path="/profile" element={user ? <Profile user={user} onUpdate={handleUpdateUser} /> : <Navigate to="/auth" />} />
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
