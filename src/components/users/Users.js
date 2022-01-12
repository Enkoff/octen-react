import React from 'react';

import User from "./User";
import './users.css'

const Users = ({data, detailsHandler}) => {
    return (
        <div className='container border'>
            {data.map(user => <User key={user.id} user={user} detailsHandler={detailsHandler}/>)}
        </div>
    );
};

export default Users;


