import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from '../../components';

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;