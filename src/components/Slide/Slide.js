import React from 'react';
import {useNavigate} from 'react-router';

import './slide.css';
import '../Button/button.css';

import {category, configThemoviedb} from '../../config';
import {Button} from '../index';

const Slide = ({movie, className,}) => {
    const {title, overview, id} = movie;
    const navigate = useNavigate();

    const background = configThemoviedb.originalImage(movie['backdrop_path']);
    const poster = configThemoviedb.w500Image(movie['poster_path']);

    const watchNow = () => {
        navigate(`/detail${category.movie}/${id}`);
    };

    return (
        <div
            className={`slideItem ${className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className={'slideContentContainer'}>
                <div className={'slideInfo'}>
                    <h2 className={'slideTitle'}>{title}</h2>
                    <div className={'slideOverview'}>{overview}</div>
                    <div className={'slideBtns'}>
                        <Button onClick={watchNow} className={'button'}>Watch now</Button>
                    </div>
                </div>
                <div className={'slidePoster'}>
                    <img src={poster} alt={title}/>
                </div>
            </div>
        </div>
    );
};

export default Slide;