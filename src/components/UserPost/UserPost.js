import React from 'react';

const UserPost = ({post: {id, userId, title, body}}) => {
    return (
        <div>
            <div>{`id: ${id}`}</div>
            <div>{`userId: ${userId}`}</div>
            <div>{`title: ${title}`}</div>
            <div>{`body: ${body}`}</div>
            <hr/>
        </div>
    );
};

export default UserPost;