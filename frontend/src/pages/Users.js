import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users', { withCredentials: true });
                setUsers(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setMessage('Not authorized. Please log in.');
                } else {
                    console.error('There was an error fetching the users!', error);
                }
            }
        };

        fetchUsers();
    }, []);

    const handleClear = async () => {
        try {
            const response = await axios.post('http://localhost:5000/clear', {}, { withCredentials: true });
            alert(response.data);
            setUsers([]);
        } catch (error) {
            console.error('There was an error clearing the database!', error);
        }
    };

    return (
        <div className="container">
            <h1>Users</h1>
            {user && <p>Hi, {user.name} ({user.email}}!</p>} 
            {message && <p>{message}</p>}
            <button onClick={handleClear}>Clear Database</button>
            <ul className="top">
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email} - {user.last_login}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
