import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setMessage } from './data/reducers';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', { name, email, password }, { withCredentials: true });
            dispatch(setMessage(response.data));
            if (response.data === 'User registered') {
                dispatch(setUser({ email }));
            }
        } catch (error) {
            console.error('There was an error registering the user!', error);
            dispatch(setMessage('Registration failed'));
        }
    };

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            {message && (
                <div className="container top">
                    <p>{message}</p>
                    {message === 'User registered' && <a href="/users">Go to Users</a>}
                </div>
            )}
        </div>
    );
};

export default Register;
