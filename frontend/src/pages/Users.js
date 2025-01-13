import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../data/reducers/usersSlice';
import { setMessage } from '../data/reducers/messageSlice';

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, { withCredentials: true });
        dispatch(setUsers(response.data));
      } catch (error) {
        dispatch(setMessage('Failed to fetch users'));
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Users</h1>
      {users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Users;
