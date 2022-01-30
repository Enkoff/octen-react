import React from 'react';

import CatAndDog from "../CatAndDog/CatAndDog";
import styles from './catsAndDogs.module.css';

const CatsAndDogs = ({data, arrName, dispatch}) => {
    return (
        <div className={styles.container}>
            {data.map(item => <CatAndDog key={item.id} arrName={arrName} item={item} dispatch={dispatch}/>)}
        </div>
    );
};

export default CatsAndDogs;