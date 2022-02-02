import {axiosJsonPlaceholderService} from './axios.service';
import {urls} from '../constants';

export const userService = {
    getAll: () => axiosJsonPlaceholderService.get(urls.users).then(car => car.data),
};