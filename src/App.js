import React, {useEffect, useState} from 'react';

import Users from "./components/users/Users";
import UserDetails from "./components/user_details/UserDetails";
import Posts from "./components/posts/Posts";
import {postService} from "./services/post.service";
import {userService} from "./services/user.service";
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getAll().then(res => setUsers(res));
    },[]);

    const detailsHandler = (id) => {
        userService.getUser(id).then(res => setUser(res));
    }

    const postsHandler = (id) => {
        postService.getAll()
            .then(res => res.filter(post => post.userId === id))
            .then(posts => setUserPosts(posts));
    }

    return (
        <div>
            <div className='wrapper'>
                <Users data={users} detailsHandler={detailsHandler}/>
                <UserDetails user={user} postHandler={postsHandler}/>
            </div>
            <Posts data={userPosts}/>
        </div>
    );
};

export default App;


