import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Car} from '../Car/Car';
import {getAllCarsThunk} from '../../store';

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCarsThunk());
    },[dispatch]);

    return (
        <div>
            {status === 'pending' && <div>Loading</div>}
            {status === 'fulfilled' && cars.map(car => <Car key={car.id} car={car}/>)}
            {status === 'rejected' && <div>{error}</div>}
        </div>
    );
};

export {Cars};