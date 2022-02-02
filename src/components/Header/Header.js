import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <NavLink to={'/'}>Cars</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};