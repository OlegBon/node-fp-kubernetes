import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, setMessage } from '../data/reducers/userSliceReducer.js';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
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
            {user && <p>Bye, {user.name} ({user.email})! Take you care.</p>} 
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;
