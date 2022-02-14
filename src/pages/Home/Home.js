import React from 'react';

import {
    CategoryList,
    Slides
} from '../../components';
import {category, movieType, tvType} from '../../config';

const Home = () => {
    return (
        <div>
            <Slides/>
            <CategoryList
                category={category.movie}
                type={movieType.popular}
                title={'Trending Movies'}
            />
            <CategoryList
                category={category.movie}
                type={movieType.top_rated}
                title={'Top Rated Movies'}
            />
            <CategoryList
                category={category.tv}
                type={tvType.popular}
                title={'Trending TV'}
            />
            <CategoryList
                category={category.tv}
                type={tvType.top_rated}
                title={'Top Rated TV'}
            />
        </div>
    );
};

export default Home;