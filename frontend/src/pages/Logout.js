import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setMessage } from './data/reducers';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            try {
                const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
                dispatch(setMessage(response.data));
                dispatch(setUser(null));
                navigate('/');
            } catch (error) {
                console.error('There was an error logging out!', error);
                dispatch(setMessage('Logout failed'));
            }
        };

        logoutUser();
    }, [dispatch, navigate]);

    return (
        <div className="container">
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
