import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {deleteById, incAndDecCompleted} from '../../store';
import styles from './todo.module.css';

const Todo = ({todo: {id, name}}) => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteById({id, isChecked}));
    };

    const onChange = () => {
        setIsChecked(prev => !prev)
        dispatch(incAndDecCompleted({isChecked}));
    }

    return (
        <div className={styles.todoContainer}>
            <input type="checkbox" checked={isChecked} onChange={onChange}/>
            <div className={isChecked && styles.todoCompleted}>{name}</div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export {Todo};