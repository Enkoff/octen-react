import {axiosService} from './axios.service';
import {urls} from '../constants';

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(car => car.data),
    create: (car) => axiosService.post(urls.cars, car).then(car => car.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(car => car.data)
};