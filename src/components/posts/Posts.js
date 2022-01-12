import React from 'react';

import Post from "./Post";

const Posts = ({data}) => {
    return (
        <div className={data.length !== 0 && 'border'}>
            <ul>
                {data.map(post => <Post key={post.id} post={post}/>)}
            </ul>
        </div>
    );
};

export default Posts;