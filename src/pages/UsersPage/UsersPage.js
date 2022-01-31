import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import styles from './users.module.css';
import User from "../../components/User/User";
import {userService} from "../../services/user.service";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users));
    },[])

    return (
        <div className={styles.rootUsersContainer}>
            <div className={styles.usersContainer}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className={styles.usersOutletContainer}>
                <Outlet/>
            </div>
        </div>

    );
};

export default UsersPage;