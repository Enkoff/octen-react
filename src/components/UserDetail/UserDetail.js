import React, {useEffect, useState} from 'react';
import {NavLink, Outlet, useLocation} from "react-router-dom";

import styles from './userDetail.module.css';
import {userService} from "../../services/user.service";

const UserDetail = () => {
    const {state: {id}} = useLocation();
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(id).then(user => setUser(user));
    }, [id])

    return (
        <div className={styles.userDetailContainer}>
            {
                user &&
                <>
                    <div>{`id: ${user.id}`}</div>
                    <div>{`name: ${user.name}`}</div>
                    <div>{`userName: ${user.username}`}</div>
                    <div>{`email: ${user.email}`}</div>
                    <div className={styles.userDetailLinkContainer}>
                        <NavLink className={styles.userDetailLink} to={'posts'} state={{id: user.id}}>Posts</NavLink>
                    </div>
                </>
            }
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetail;