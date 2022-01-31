import React from 'react';
import {Outlet} from "react-router-dom";

import styles from './home.module.css';
import Header from "../../components/Header/Header";

const Layout = () => {
    return (
        <div>
            <Header header={styles.header} link={styles.link}/>
            <div className={styles.outletContainer}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;