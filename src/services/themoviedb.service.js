import {axiosService} from './axios.service';
import {category, movieType, tvType} from '../config';

export const themoviedbService = {
    getUpcomingMoviesList: () => axiosService.get(`${category.movie}${movieType.upcoming}`).then(movies => movies.data),
    getPopularMoviesList: () => axiosService.get(`${category.movie}${movieType.popular}`).then(movies => movies.data),
    getTopRatedMoviesList: () => axiosService.get(`${category.movie}${movieType.top_rated}`).then(movies => movies.data),

    getPopularTvList: () => axiosService.get(`${category.tv}${tvType.popular}`).then(movies => movies.data),
    getTopRatedTvList: () => axiosService.get(`${category.tv}${tvType.top_rated}`).then(movies => movies.data),
    getOnTheAirTvList: () => axiosService.get(`${category.tv}${tvType.on_the_air}`).then(movies => movies.data),
};