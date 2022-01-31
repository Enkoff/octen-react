import React from 'react';
import {Routes, Route} from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetail from "./components/PostDetail/PostDetail";
import HomePage from "./pages/HomePage/HomePage";
import Comments from "./components/Comments/Comments";
import UserDetail from "./components/UserDetail/UserDetail";
import UserPosts from "./components/UserPosts/UserPosts";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import Photos from "./components/Photos/Photos";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetail/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                    <Route path={'albums/:id'} element={<UserAlbums/>}>
                        <Route path={'photos'} element={<Photos/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetail/>}>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;


