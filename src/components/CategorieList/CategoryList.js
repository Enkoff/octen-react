import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import './categoryList.css';
import btnStyles from '../Button/button.module.css';
import {themoviedbService} from '../../services';
import {Button, MovieCard} from '../index';

const CategoryList = ({category, type, title}) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        themoviedbService
            .getMoviesList(category, type)
            .then(res => setMovieList(res.results));
    }, []);

    const viewMore = () => {

    };

    return (
        <div className={'categoryWrapper'}>
            <div className={'categoryHeader'}>
                <h2 className={'title'}>{title}</h2>
                <Button
                    className={`${btnStyles.buttonOutline} categoryHeaderBtn`}
                    onClick={viewMore}>
                    View more
                </Button>
            </div>
            <Swiper
                spaceBetween={10}
                grabCursor={true}
                slidesPerView={'auto'}
                // autoplay={{delay: 3000}}
            >
                {
                    movieList.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({isActive}) => (
                                <MovieCard item={item}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CategoryList;