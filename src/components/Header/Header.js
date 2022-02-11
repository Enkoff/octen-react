import React from 'react';

import styles from './header.module.css';
import {Logo, NavLinks} from './index';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <NavLinks />
        </div>
    );
};

export default Header;