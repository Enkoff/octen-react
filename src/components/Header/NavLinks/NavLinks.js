import React from 'react';
import {NavLink} from 'react-router-dom';

import './navLink.css';

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
        <div className={'navLinkWrapper'}>
            {
                headerNav.map((link, i) => (
                    <NavLink key={i} to={link.path}>
                        {link.display}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default NavLinks;