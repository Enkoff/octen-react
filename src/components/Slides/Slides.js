import React, {useEffect, useState} from 'react';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {themoviedbService} from '../../services';
import {Slide, TrailerModal} from '../index';
import {category, movieType} from '../../config';

const Slides = () => {
    const [movies, setMovies] = useState([]);

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        themoviedbService
            .getMoviesList(category.movie, movieType.upcoming)
            .then(res => setMovies(res.results));
    }, []);


    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            // autoplay={{delay: 3000}}
        >
            {
                movies.map((movie, i) => (
                    <SwiperSlide key={i}>
                        {({isActive}) => (
                            <Slide movie={movie} className={isActive ? 'active' : ''}/>
                        )}
                    </SwiperSlide>
                ))
            }
            {/*{*/}
            {/*    movies.map((movie, i) => <TrailerModal key={i} movie={movie} isActive={}/>)*/}
            {/*}*/}
        </Swiper>
    );
};

export default Slides;