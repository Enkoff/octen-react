import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCarsThunk} from '../../store';
import styles from './cars.module.css';
import {Car} from '../Car/Car';

const Cars = () => {
    const {cars} = useSelector(state => state.car);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCarsThunk());
    }, [dispatch]);

    return (
        <div className={styles.carsContainer}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};