import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../data/reducers/userSlice';
import { setMessage } from '../data/reducers/messageSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password }, { withCredentials: true });
      console.log('Registration Response:', response.data);
      dispatch(setUser({ name: response.data.name, email }));
      dispatch(setMessage('Login successful'));
      navigate('/');
    } catch (error) {
      dispatch(setMessage('Login failed'));
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
