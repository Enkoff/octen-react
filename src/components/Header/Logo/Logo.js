import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './logo.module.css';
import {logo} from '../../../assets';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt={'logo'}/>
            <NavLink to={'#'} >Best movie</NavLink>
        </div>
    );
};

export default Logo;