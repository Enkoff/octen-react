import React from 'react';
import {NavLink} from 'react-router-dom';

import './logo.css';
import {logo} from '../../../assets';

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logo} alt={'logo'}/>
            <NavLink to={'/'}>Best movie</NavLink>
        </div>
    );
};

export default Logo;