import React from 'react';
import {configThemoviedb} from '../../config';

const CategoryItem = ({item}) => {
    const poster = configThemoviedb.w500Image(item['poster_path']);

    return (
        <div style={{width: '200px'}}>
            <img src={poster} alt={item.title} style={{width: '100%', height: '100%'}}/>
        </div>
    );
};

export default CategoryItem;