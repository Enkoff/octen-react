import React from 'react';
import {useDispatch} from 'react-redux';

import styles from './car.module.css';
import {carToUpdate, deleteCarThunk} from '../../store';

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteCarThunk({id}));
    };

    const updateHandler = () => {
        dispatch(carToUpdate({car: {id, model, price, year}}));
    };

    return (
        <div className={styles.carContainer}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={deleteHandler}>Delete</button>
            <button onClick={updateHandler}>Update</button>
        </div>
    );
};

export {Car};