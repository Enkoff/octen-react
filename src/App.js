import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {
    CarsPage,
    CommentsPage,
    Layout,
    PostsPage,
    UsersPage
} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
