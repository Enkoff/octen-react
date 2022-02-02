import React from 'react';

const Post = ({post: {title, body}}) => {
    return (
        <div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};