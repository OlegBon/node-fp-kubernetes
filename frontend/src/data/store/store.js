import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/userSliceReducer.js';

// Створюємо store
const store = configureStore({
  reducer: rootReducer
});

export default store;
