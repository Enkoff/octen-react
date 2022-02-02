import React from 'react';

const User = ({user: {name, email}}) => {
    return (
        <div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export {User};