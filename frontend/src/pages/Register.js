import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../data/reducers/userSlice.js';
import { setMessage } from '../data/reducers/messageSlice.js';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, { name, email, password }, { withCredentials: true });
      dispatch(setUser({ name, email }));
      dispatch(setMessage('User registered successfully'));
      navigate('/users');
    } catch (error) {
      dispatch(setMessage('Registration failed'));
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
