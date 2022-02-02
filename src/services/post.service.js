import {axiosJsonPlaceholderService} from './axios.service';
import {urls} from '../constants';

export const postService = {
    getAll: () => axiosJsonPlaceholderService.get(urls.posts).then(car => car.data),
};