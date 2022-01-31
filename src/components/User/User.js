import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './user.module.css';

const User = ({user: {id, name}}) => {
    return (
        <div className={styles.userContainer}>
            <div>
                {`${id}) ${name}`}
            </div>
            <div>
                <NavLink className={styles.userLink} to={`${id}`} state={{id: id}}>User Detail</NavLink>
                <NavLink className={styles.userLink} to={`albums/${id}`}>Albums</NavLink>
            </div>
        </div>
    );
};

export default User;