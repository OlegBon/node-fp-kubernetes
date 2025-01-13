import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setMessage } from '../data/reducers/userSliceReducer.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password }, { withCredentials: true });
            dispatch(setMessage(response.data));
            if (response.data === 'Login successful') {
                dispatch(setUser({ email }));
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            dispatch(setMessage('Login failed'));
        }
    };

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {message && (
                <div className="container top">
                    <p>{message}</p>
                    {message === 'Login successful' && <a href="/users">Go to Users</a>}
                </div>
            )}
        </div>
    );
};

export default Login;
