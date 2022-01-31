import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './userAlbum.module.css';

const UserAlbum = ({album: {id, userId, title}}) => {
    return (
        <>
            <div className={styles.userAlbumContainer}>
                <div>{`id: ${id}`}</div>
                <div>{`userId: ${userId}`}</div>
                <div>{`title: ${title}`}</div>
                <button className={styles.btn}>
                    <NavLink to={'photos'} state={{id}}>Photos</NavLink>
                </button>
            </div>
        </>
    );
};

export default UserAlbum;