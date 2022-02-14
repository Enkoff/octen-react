import React from 'react';
import {useNavigate} from 'react-router';

import './movieCard.css';
import {configThemoviedb} from '../../config';


const MovieCard = ({item: {poster_path, title, name, id},category}) => {
    const navigate = useNavigate();

    const bg = configThemoviedb.w500Image(poster_path);

    const cardHandler = () => {
        navigate(`/detail${category}/${id}`);
    };

    return (
        <div onClick={cardHandler} className={'movieCardWrapper'}>
            <div className={'movieCard'} style={{backgroundImage: `url(${bg})`}}/>
            <h3 className={'movieCardTitle'}>{title || name}</h3>
        </div>
    );
};

export default MovieCard;