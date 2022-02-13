import {axiosService} from './axios.service';
import {category, configThemoviedb} from '../config';

export const themoviedbService = {
    getMoviesList: (category, type, page = 1) => axiosService.get(`${category}${type}${configThemoviedb.apiKey}&page=${page}`).then(movies => movies.data),
    getTrailer: (id) => axiosService.get(`${category.movie}/${id}${category.videos}${configThemoviedb.apiKey}`).then(movies => movies.data),
};