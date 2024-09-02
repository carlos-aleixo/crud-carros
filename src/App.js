import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import GerenciarCarro from './pages/GerenciarCarro';
import Login from './pages/Login';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={<PrivateRoute><GerenciarCarro /></PrivateRoute>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
