import React from 'react';

const Users = ({data}) => {
    return (
        <div className='border w50'>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>

    );
};

export default Users;


