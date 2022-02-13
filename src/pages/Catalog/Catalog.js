import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {
    CatalogHeader,
    MovieGrid
} from '../../components';

const Catalog = () => {
    const {pathname} = useLocation();

    return (
        <div>
            <CatalogHeader>
                {pathname === '/tv' ? 'TV Series' : 'Movies'}
            </CatalogHeader>
            <MovieGrid />
        </div>
    );
};

export default Catalog;