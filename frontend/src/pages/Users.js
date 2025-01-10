import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');

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
        <div>
            <h1>Users</h1>
            {message && <p>{message}</p>}
            <button onClick={handleClear}>Clear Database</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
