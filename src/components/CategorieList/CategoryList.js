import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useNavigate} from 'react-router';

import './categoryList.css';
import '../Button/button.css';

import {themoviedbService} from '../../services';
import {Button, MovieCard} from '../index';

const CategoryList = ({category, type, title}) => {
    const navigate = useNavigate();
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        themoviedbService
            .getMoviesList(category, type)
            .then(res => setMovieList(res.results));
    }, [category, type]);

    const viewMore = () => {
        navigate(`${category}`);
    };

    return (
        <div className={'categoryWrapper'}>
            <div className={'categoryHeader'}>
                <h2 className={'title'}>{title}</h2>
                <Button className={'buttonOutline categoryHeaderBtn'} onClick={viewMore}>View more</Button>
            </div>
            <Swiper
                spaceBetween={10}
                grabCursor={true}
                slidesPerView={'auto'}
                // autoplay={{delay: 3000}}
            >
                {
                    movieList.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item} category={category}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CategoryList;