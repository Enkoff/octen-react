import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import './slides.css';

import {Slide} from '../index';
import {category, movieType} from '../../config';
import {getMovieThunk} from '../../store';

//ДОДАТИ ТРЕЙЛЕР

const Slides = () => {
    const dispatch = useDispatch();
    const {homeUpcoming} = useSelector(state => state['themoviedb']);

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        dispatch(getMovieThunk({category: category.movie, type: movieType.upcoming}));
    }, [dispatch]);

    return (
        <div className={'upcomingWrapper'}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{delay: 3000}}
                speed={1000}
            >
                {
                    homeUpcoming.map((movie, i) => (
                        <SwiperSlide key={i}>
                            {({isActive}) => (
                                <Slide movie={movie} className={isActive ? 'active' : ''}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    );
};

export default Slides;