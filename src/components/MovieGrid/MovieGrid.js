import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import './movieGrid.css';
import styles from '../Button/button.module.css';
import {Button, MovieCard} from '../index';
import {themoviedbService} from '../../services';
import {movieType, tvType} from '../../config';


const MovieGrid = () => {
    const catalog = useParams();

    console.log(catalog);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        console.log('popal');
    }, []);

    useEffect(() => {
        if (page === 1) {
            if (catalog === '/tv') {
                themoviedbService
                    .getMoviesList(catalog, tvType.popular, page)
                    .then(res => setMovies(res.results));
            } else {
                themoviedbService
                    .getMoviesList(catalog, movieType.popular, page)
                    .then(res => setMovies(res.results));
            }
        }
    }, [catalog, page]);


    const loadMore = () => {
        setPage(prev => prev + 1);
        if (catalog === '/tv') {
            themoviedbService
                .getMoviesList(catalog, tvType.popular, page + 1)
                .then(res => setMovies(prev => [...prev, ...res.results]));
        } else {
            themoviedbService
                .getMoviesList(catalog, movieType.popular, page + 1)
                .then(res => setMovies(prev => [...prev, ...res.results]));
        }
    };

    return (
        <>
            <div className={'movieGrid'}>
                {
                    movies.map((item, index) => <MovieCard key={index} item={item}/>)
                }
            </div>
            <div className={'loadMoreWrapper'}>
                <Button
                    onClick={loadMore}
                    className={styles.buttonOutline}

                >
                    Load more
                </Button>
            </div>
        </>
    );
};

export default MovieGrid;