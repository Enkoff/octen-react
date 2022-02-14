import {axiosService} from './axios.service';
import {category, configThemoviedb} from '../config';

export const themoviedbService = {
    getMoviesList: (category, type, page = 1) => axiosService.get(`${category}${type}${configThemoviedb.apiKey}&page=${page}`).then(movies => movies.data),
    getDetail: (cat, id) => axiosService.get(`/${cat}/${id}${configThemoviedb.apiKey}`).then(detail => detail.data),
    getTrailer: (cat,id) => axiosService.get(`/${cat}/${id}${category.videos}${configThemoviedb.apiKey}`).then(movies => movies.data),
    getCredits: (cat, id) => axiosService.get(`/${cat}/${id}${category.credits}${configThemoviedb.apiKey}`).then(credits => credits.data)
};