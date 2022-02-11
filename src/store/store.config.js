import {configureStore} from '@reduxjs/toolkit';
import {carReducer} from './';

const store = configureStore({
    reducer: {
        car: carReducer,
    }
});

export default store;