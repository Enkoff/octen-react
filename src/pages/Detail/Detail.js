import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';

import './detail.css';
import {getDetailThunk} from '../../store';
import {configThemoviedb} from '../../config';
import {Casts, Trailer} from '../../components';

const Detail = () => {
    const {category, id} = useParams();
    const dispatch = useDispatch();

    const detailWrapperRef = useRef(null);

    const {detail} = useSelector(state => state['themoviedb']);

    const backgroundImage = (pathOne, pathTwo) => `url(${configThemoviedb.originalImage(detail[pathOne] || detail[pathTwo])})`;

    useEffect(() => {
        detailWrapperRef.current.classList.add('active');
        window.scrollTo(0, 0);
        dispatch(getDetailThunk({category, id}));
    }, [category, dispatch, id]);

    return (
        <div ref={detailWrapperRef} className={'detailWrapper'}>
            {
                detail && (
                    <>
                        <div className={'detailBanner'}
                             style={
                                 {backgroundImage: backgroundImage('backdrop_path', 'poster_path')}
                             }/>
                        <div className={'detailContent'}>
                            <div className="detailPoster">
                                <div className="posterImage"
                                     style={
                                         {backgroundImage: backgroundImage('poster_path', 'backdrop_path')}
                                     }/>
                            </div>
                            <div className="detailInfo">
                                <div className="infoTitle">
                                    {detail.title || detail.name}
                                </div>
                                <div className="infoGenres">
                                    {
                                        detail['genres'].map((genre, i) => (
                                            <span key={i}>{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="infoOverview">{detail['overview']}</p>
                                <div className="cast">
                                    <div className="castHeader">
                                        <h2>Cast</h2>
                                    </div>
                                    <Casts/>
                                </div>
                            </div>
                        </div>
                        <div className={'detailTrailerWrapper'}>
                            <Trailer category={category} id={id}/>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Detail;