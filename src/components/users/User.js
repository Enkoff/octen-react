import React from 'react';

import './user.css';

const User = ({user: {id, name, username, email}}) => {
    return (
        <div className={'user__rapper'}>
            {`${id}. ${name}---${username}---${email}`}
        </div>
    );
};

export default User;


