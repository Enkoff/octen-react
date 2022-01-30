import React from 'react';

import styles from './input.module.css';
import {generateId} from "../../generateId";

const Input = ({value, onChange, name, dispatch, arrayName, addName, clearField}) => {

    const saveHandler = () => {
        dispatch({
            type: 'add',
            payload: {
                item: {name: value, id: generateId()},
                arrayName
            }
        });
        clearField(name);
    }

    return (
       <div className={styles.input__container}>
           {addName} <input type={'text'} name={name} value={value} onChange={onChange}/>
           <button onClick={saveHandler}>SAVE</button>
       </div>
    );
};



export default Input;


