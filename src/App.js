import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import {
    Catalog,
    Home,
    Layout,
} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'/movie'} element={<Catalog />}/>
                <Route path={'/tv'} element={<Catalog />}/>
            </Route>
        </Routes>
    );
};

export default App;
