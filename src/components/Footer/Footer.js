import React from 'react';

import './footer.css';
import {background} from '../../assets';
import {Logo} from '../Header';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <div className={'footerWrapper'} style={{backgroundImage: `url(${background})`}}>
            <div className={'footerContent'}>
                <div className={'logoWrapper'}>
                    <Logo/>
                </div>
                <div className={'footerContentMenus'}>
                    <div className={'footerContentMenu'}>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/'}>Contact us</NavLink>
                        <NavLink to={'/'}>Term of service</NavLink>
                        <NavLink to={'/'}>About us</NavLink>
                    </div>
                    <div className={'footerContentMenu'}>
                        <NavLink to={'/'}>Live</NavLink>
                        <NavLink to={'/'}>FAQ</NavLink>
                        <NavLink to={'/'}>Premium</NavLink>
                        <NavLink to={'/'}>Privet policy</NavLink>
                    </div>
                    <div className={'footerContentMenu'}>
                        <NavLink to={'/'}>You must watch</NavLink>
                        <NavLink to={'/'}>Recent release</NavLink>
                        <NavLink to={'/'}>Top IMDB</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;