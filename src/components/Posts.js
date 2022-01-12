import React from 'react';

const Posts = ({data}) => {
    return (
        <div className='border w50'>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>
    );
};

export default Posts;


