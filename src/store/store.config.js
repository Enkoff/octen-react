import {configureStore} from '@reduxjs/toolkit';
import {userReducer, carReducer, postReducer, commentReducer} from './';

const store = configureStore({
    reducer: {
        car: carReducer,
        user: userReducer,
        post: postReducer,
        comment: commentReducer
    }
});

export default store;