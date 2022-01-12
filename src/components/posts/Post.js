import React from 'react';

const Post = ({post: {body}}) => {
    return <li>{body}</li>
};

export default Post;