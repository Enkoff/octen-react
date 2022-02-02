import React from 'react';

const Comment = ({comment: {name, email, body}}) => {
    return (
        <div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};