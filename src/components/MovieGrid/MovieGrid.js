import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import './movieGrid.css';
import '../Button/button.css';

import {Button, MovieCard} from '../index';
import {movieType, tvType} from '../../config';
import {getMovieThunk} from '../../store';

const MovieGrid = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {movie, tv} = useSelector(state => state['themoviedb']);

    const [page, setPage] = useState(null);

    useEffect(() => {
        if (pathname === '/tv') {
            setPage(1);
            dispatch(getMovieThunk({category: pathname, type: tvType.popular, mode: 'get'}));
        } else {
            setPage(1);
            dispatch(getMovieThunk({category: pathname, type: movieType.popular, mode: 'get'}));
        }
    }, [dispatch, pathname]);

    const loadMore = () => {
        if (pathname === '/tv') {
            dispatch(getMovieThunk({category: pathname, type: tvType.popular, page: page + 1, mode: 'add'}));
        } else {
            dispatch(getMovieThunk({category: pathname, type: movieType.popular, page: page + 1, mode: 'add'}));
        }
        setPage(prev => prev + 1);
    };

    return (
        <>
            <div className={'movieGrid'}>
                {
                    pathname === '/tv'
                        ? tv.map((item, index) => <MovieCard key={index} item={item} category={pathname}/>)
                        : movie.map((item, index) => <MovieCard key={index} item={item} category={pathname} />)
                }
            </div>
            <div className={'loadMoreWrapper'}>
                <Button onClick={loadMore} className={'buttonOutline'}>Load more</Button>
            </div>
        </>
    );
};

export default MovieGrid;