import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password }, { withCredentials: true });
            setMessage(response.data);
        } catch (error) {
            console.error('There was an error logging in!', error);
            setMessage('Login failed');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
		<br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && (
                <div className="top">
                    <p>{message}</p>
                    {message === 'Login successful' && <a href="/users">Go to Users</a>}
                </div>
            )}
        </div>
    );
};

export default Login;
