import React, {useEffect, useRef} from 'react';

import './header.css';
import {Logo, NavLinks} from './index';

const Header = () => {

    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={'header'}>
            <Logo/>
            <NavLinks/>
        </div>
    );
};

export default Header;