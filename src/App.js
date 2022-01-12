import React, {useEffect, useState} from 'react';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import './App.css'

const App = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => setUsers(response));
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPosts(response));
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => setComments(response));
    }, [])

    return (
        <div>
            <div className='header'>
                <Users data={users}/>
                <Posts data={posts}/>
            </div>
            <Comments data={comments}/>
        </div>
    );
};

export default App;


