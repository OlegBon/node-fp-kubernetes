import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice.js';
import usersReducer from '../reducers/usersSlice.js';
import messageReducer from '../reducers/messageSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    message: messageReducer,
  },
});

export default store;
