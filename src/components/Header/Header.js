import React from 'react';
import {NavLink} from "react-router-dom";

const Header = ({header, link}) => {
    return (
        <div className={header}>
            <NavLink className={link} to={'users'}>Users</NavLink>
            <NavLink className={link} to={'posts'}>Posts</NavLink>
        </div>
    );
};

export default Header;