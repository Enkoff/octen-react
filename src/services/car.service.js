import {axiosCarService} from './axios.service';
import {urls} from '../constants';

export const carService = {
    getAll: () => axiosCarService.get(urls.cars).then(car => car.data),
    create: (car) => axiosCarService.post(urls.cars, car).then(car => car.data),
    deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosCarService.patch(`${urls.cars}/${id}`, car).then(car => car.data)
};