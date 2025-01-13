import { createSlice } from '@reduxjs/toolkit';

// Створення slice для користувача
const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload
  }
});

// Створення slice для списку користувачів
const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload
  }
});

// Створення slice для повідомлень
const messageSlice = createSlice({
  name: 'message',
  initialState: '',
  reducers: {
    setMessage: (state, action) => action.payload
  }
});

// Експорт дій
export const { setUser } = userSlice.actions;
export const { setUsers } = usersSlice.actions;
export const { setMessage } = messageSlice.actions;

// Комбінування ред'юсерів
const rootReducer = {
  user: userSlice.reducer,
  users: usersSlice.reducer,
  message: messageSlice.reducer
};

export default rootReducer;
