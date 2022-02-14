import {configureStore} from '@reduxjs/toolkit';

import {themoviedbReducer} from './index';

const store = configureStore({
    reducer: {
        themoviedb: themoviedbReducer
    }
});

export default store;