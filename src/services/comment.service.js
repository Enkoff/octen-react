import {axiosJsonPlaceholderService} from './axios.service';
import {urls} from '../constants';

export const commentService = {
    getAll: () => axiosJsonPlaceholderService.get(urls.comments).then(car => car.data),
};