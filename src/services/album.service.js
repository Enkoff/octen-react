import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getByUserId: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(albums => albums.data),
    getById: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(albums => albums.data)
}