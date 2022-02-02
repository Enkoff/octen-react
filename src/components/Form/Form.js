import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {joiResolver} from '@hookform/resolvers/joi';

import styles from './form.module.css';
import {createCarThunk, updateCarThunk} from '../../store';
import {CarValidator} from '../../validators';

const Form = () => {
    const {carForUpdate} = useSelector(state => state['carReducer']);
    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, dispatch, setValue]);

    const submit = (data, e) => {
        const submitBtnName = e.nativeEvent.submitter.innerText;
        if (submitBtnName === 'Save') {
            dispatch(createCarThunk({car: data}));
        } else if (submitBtnName === 'Update') {
            const car = data;
            car.id = carForUpdate.id;
            dispatch(updateCarThunk({car}));
        }
        reset();
    };

    return (
        <>
            <form className={styles.inputsContainer} onSubmit={handleSubmit(submit)}>
                <div className={styles.inputContainer}>
                    <label>Model: <input type="text" {...register('model')}/></label>
                    {errors.model && <span className={styles.errorText}>{errors.model['message']}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <label>Price: <input type="text" {...register('price')}/></label>
                    {errors.price && <span className={styles.errorText}>{errors.price['message']}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <label>Year: <input type="text" {...register('year')}/></label>
                    {errors.year && <span className={styles.errorText}>{errors.year['message']}</span>}
                </div>
                <button className={styles.btn}>Save</button>
                <button className={styles.btn}>Update</button>
            </form>
        </>
    );
};

export {Form};