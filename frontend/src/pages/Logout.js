import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
                setMessage(response.data);
                navigate('/');
            } catch (error) {
                console.error('There was an error logging out!', error);
                setMessage('Logout failed');
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div className="container">
            <h1>Logging out...</h1>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Logout;
