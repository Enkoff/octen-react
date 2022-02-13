import React from 'react';

import {configThemoviedb} from '../../config';

import './slide.css';
import btnStyles from '../Button/button.module.css';
import {Button} from '../index';

const Slide = ({movie, className}) => {
    const {title, overview} = movie;

    const background = configThemoviedb.originalImage(movie['backdrop_path']);
    const poster = configThemoviedb.w500Image(movie['poster_path']);

    const watchNow = () => {

    };

    const watchTrailer = () => {

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
                        <Button onClick={watchNow} className={btnStyles.button}>
                            Watch now
                        </Button>
                        <Button onClick={watchTrailer} className={btnStyles.buttonOutline}>
                            Watch trailer
                        </Button>
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