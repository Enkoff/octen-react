import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './trailer.css';

import {configThemoviedb} from '../../config';
import {getFirstTrailerThunk} from '../../store';

const Trailer = ({category, id}) => {
    const {firstTrailer} = useSelector(state => state['themoviedb']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFirstTrailerThunk({category, id}));
    }, [category, dispatch, id]);

    return (
        <>
            {
                firstTrailer &&

                <div className={'trailerWrapper'}>
                    <h3>Trailer</h3>
                    <iframe
                        src={configThemoviedb.trailer(firstTrailer.key)}
                        width="60%"
                        height={'600px'}
                        title="video"
                        frameBorder={0}
                    >
                    </iframe>
                </div>
            }
        </>
    );
};

export default Trailer;