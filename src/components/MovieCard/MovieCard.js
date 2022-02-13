import React from 'react';

import './movieCard.css';
import {configThemoviedb} from '../../config';

const MovieCard = ({item: {poster_path, title, name}}) => {
    const bg = configThemoviedb.w500Image(poster_path);

    return (
        <div className={'movieCardWrapper'}>
            <div className={'movieCard'} style={{backgroundImage: `url(${bg})`}}>

            </div>
            <h3 className={'movieCardTitle'}>{title || name}</h3>;
        </div>
    );
};

export default MovieCard;