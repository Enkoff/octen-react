import React from 'react';
import {NavLink} from 'react-router-dom';

import styles from './navLink.module.css';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    },
];

const NavLinks = () => {
    return (
        <div className={styles.navLinkWrapper}>
            {
                headerNav.map((link, i) => (
                    <NavLink key={i} to={link.path} >
                        {link.display}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default NavLinks;