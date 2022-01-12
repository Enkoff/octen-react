import React from 'react';

const Comments = ({data}) => {
    return (
        <div className='border'>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.body}</li>)
                }
            </ul>
        </div>
    );
};

export default Comments;