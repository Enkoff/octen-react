import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(users => users.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(user => user.data)
}
