import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {themoviedbService} from '../../services';

const initialState = {
    homeUpcoming: [],
    movie: [],
    tv: [],
    detail: null,
    firstTrailer: null
};

export const getMovieThunk = createAsyncThunk(
    'themoviedbSlice/getMovieThunk',
    async ({category, type, page = 1, mode = 'get'}, {dispatch}) => {
        try {
            const movieList = await themoviedbService.getMoviesList(category, type, page).then(res => res.results);
            if (mode === 'get') {
                dispatch(setMovieAndTv({category, movieList, type}));
            }
            if (mode === 'add') {
                dispatch(addMovieAndTv({category, movieList}));
            }
        } catch (e) {
            console.log(e);
        }
    }
);

export const getDetailThunk = createAsyncThunk(
    'themoviedbSlice/getDetailThunk',
    async ({category, id}, {dispatch}) => {
        try {
            const detail = await themoviedbService.getDetail(category, id);

            dispatch(setDetail({detail}));
        } catch (e) {
            console.log(e);
        }
    }
);

export const getFirstTrailerThunk = createAsyncThunk(
    'themoviedbSlice/getFirstTrailerThunk',
    async ({category, id}, {dispatch}) => {
        try {
            const firstTrailer = await themoviedbService.getTrailer(category, id).then(res => res.results[0]);
            dispatch(setFirstTrailer({firstTrailer}));
        } catch (e) {
            console.log(e);
        }
    }
);

const themoviedbSlice = createSlice({
    name: 'themoviedbSlice',
    initialState,
    reducers: {
        setMovieAndTv: (state, action) => {
            if (action.payload.category === '/tv') {
                state.tv = action.payload.movieList;
            } else if (action.payload.type === '/upcoming') {
                state.homeUpcoming = action.payload.movieList;
            } else {
                state.movie = action.payload.movieList;
            }
        },
        addMovieAndTv: (state, action) => {
            if (action.payload.category === '/tv') {
                state.tv = [...state.tv, ...action.payload.movieList];
            } else {
                state.movie = [...state.movie, ...action.payload.movieList];
            }
        },
        setDetail: (state, action) => {
            state.detail = action.payload.detail;
        },
        setFirstTrailer: (state, action) => {
            state.firstTrailer = action.payload.firstTrailer;
        }
    },
});

const themoviedbReducer = themoviedbSlice.reducer;
export const {
    setMovieAndTv,
    addMovieAndTv,
    setDetail,
    setFirstTrailer
} = themoviedbSlice.actions;
export {themoviedbReducer};
