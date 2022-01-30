import React from 'react';

import styles from './catAndDog.module.css';

const CatAndDog = ({item: {name, id}, arrName, dispatch}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <button onClick={() => dispatch({type: 'delete', payload: {arrName, id}})}>Delete</button>
        </div>
    );
};

export default CatAndDog;