import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllPostsThunk} from '../../store';
import {Post} from '../../components';

const PostsPage = () => {
    const {posts} = useSelector(state => state['post']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPostsThunk());
    }, [dispatch]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {PostsPage};