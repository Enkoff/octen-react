import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {carService} from '../../services';

const initialState = {
    cars: [],
    carForUpdate: {}
};

export const getAllCarsThunk = createAsyncThunk(
    'carSlice/getAllCarsThunk',
    async (_, {dispatch}) => {
        try {
            const cars = await carService.getAll();
            dispatch(getAllCars({cars}));
        } catch (e) {
            console.log(e);
        }
    }
);

export const createCarThunk = createAsyncThunk(
    'carSlice/createCarThunk',
    async ({car}, {dispatch}) => {
        try {
            const newCar = await carService.create(car);
            dispatch(addCar({car: newCar}));
        } catch (e) {
            console.log(e);
        }
    }
);

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}));
        } catch (e) {
            console.log(e);
        }
    }
);

export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({car}, {dispatch}) => {
        try {
            await carService.updateById(car.id, car);
            dispatch(updateCar({car}));
        } catch (e) {
            console.log(e);
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getAllCars: (state, action) => {
            state.cars = action.payload.cars;
        },
        addCar: (state, action) => {
            state.cars.push(action.payload.car);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car;
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car;
        },
    },
    //ЕТАПИ ЗАПИТУ ЦЕ ДЛЯ СЕБЕ ЗБЕРІГ =)
    // extraReducers: {
    // [getAllCarsThunk.pending]: (state, action) => {
    //     state.status = 'pending';
    //     state.error = null;
    // },
    // [getAllCarsThunk.fulfilled]: (state, action) => {
    //     state.status = 'fulfilled';
    //     state.cars = action.payload.cars;
    // },
    // [getAllCarsThunk.rejected]: (state, action) => {
    //     state.status = 'rejected';
    //     state.error = action.payload;
    // },
    // }
});

const carReducer = carSlice.reducer;
export const {
    getAllCars,
    addCar,
    deleteCar,
    carToUpdate,
    updateCar,
} = carSlice.actions;
export {carReducer};
