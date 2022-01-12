import React from 'react';

import './userDetails.css'

const UserDetails = ({user, postHandler}) => {
    return (
        user && <div className='userDetail border'>
            {JSON.stringify(user)}
            <button className='post__btn' onClick={() => postHandler(user.id)}>GetPosts</button>
        </div>
    );
};

export default UserDetails;


