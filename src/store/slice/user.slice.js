import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userService} from '../../services';

const initialState = {
    users: [],
};

export const getAllUsersThunk = createAsyncThunk(
    'userSlice/getAllUsersThunk',
    async (_, {dispatch}) => {
        try {
            const users = await userService.getAll();
            dispatch(getAllUsers({users}));
        } catch (e) {
            console.log(e);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getAllUsers: (state, action) => {
            state.users = action.payload.users;
        },
    },
});

const userReducer = userSlice.reducer;
export const {
    getAllUsers,
} = userSlice.actions;
export {userReducer};
