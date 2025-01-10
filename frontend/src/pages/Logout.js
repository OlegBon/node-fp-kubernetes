import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Logout = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
                setMessage(response.data);
            } catch (error) {
                console.error('There was an error logging out!', error);
                setMessage('Logout failed');
            }
        };

        logoutUser();
    }, []);

    return (
        <div>
            <h1>Logging out...</h1>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Logout;
