import React, {useEffect, useState} from 'react';

import './trailerModal.css';
import {themoviedbService} from '../../services';

const TrailerModal = ({movie}) => {
    const [trailerKey, setTrailerKey] = useState('');

    useEffect(() => {
        themoviedbService.getTrailer(movie.id).then(movie => {
                let key = '';
                if (movie.results.length > 0) {
                    key = movie.results[0].key;
                }

                const videSrc = `https://www.youtube.com/embed/${key}`;
                setTrailerKey(videSrc);
            }
        );
    }, []);

    return (
        <div className={'modal active'}>
            <div className={'content activeContent'}>
                <iframe
                    width="100%"
                    height="500px"
                    title="trailer"
                    src={trailerKey}>
                </iframe>
            </div>
        </div>
    );
};

export default TrailerModal;