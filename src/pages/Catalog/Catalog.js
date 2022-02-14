import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {
    CatalogHeader,
    MovieGrid
} from '../../components';

const Catalog = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname]);

    return (
        <div>
            <CatalogHeader>
                {pathname === '/tv' ? 'TV Series' : 'Movies'}
            </CatalogHeader>
            <MovieGrid/>
        </div>
    );
};

export default Catalog;