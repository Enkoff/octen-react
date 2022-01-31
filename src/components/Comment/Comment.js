import React from 'react';

const Comment = ({comment: {id, postId, body, email, name}}) => {
    return (
        <div>
            <div>{`id: ${id}`}</div>
            <div>{`postId: ${postId}`}</div>
            <div>{`body: ${body}`}</div>
            <div>{`email: ${email}`}</div>
            <div>{`name: ${name}`}</div>
            <hr/>
        </div>
    );
};

export default Comment;