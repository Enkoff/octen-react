import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import styles from './posts.module.css';
import Post from "../../components/Post/Post";
import {postService} from "../../services/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(posts => setPosts(posts));
    }, []);

    return (
        <div className={styles.rootPostsContainer}>
            <div className={styles.postsContainer}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div className={styles.usersOutletContainer}>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;