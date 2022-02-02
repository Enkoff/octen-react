import { configureStore } from '@reduxjs/toolkit';
import carReducer from './slice/car.slice';

const store =configureStore({
    reducer: {
        carReducer
    }
});

export default store;