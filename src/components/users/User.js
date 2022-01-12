import React from 'react';

import './user.css'

const User = ({user: {id, name},detailsHandler}) => {
    return (
        <div className='wrapper'>
            <div>{name}</div>
            <button onClick={() => detailsHandler(id)}>GetDetails</button>
        </div>
    )
};

export default User;