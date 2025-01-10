import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
                alert(response.data);
                navigate('/');
            } catch (error) {
                console.error('There was an error logging out!', error);
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
