import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import Logout from './pages/Logout';

const App = () => {
  const isAuthenticated = !!document.cookie; // Перевірка наявності кукі

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <h2>Welcome! Please <Link to="/login">Login</Link> or <Link to="/register">Register</Link>.</h2>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
