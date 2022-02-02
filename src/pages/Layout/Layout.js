import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from '../../components';

const Layout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export {Layout};