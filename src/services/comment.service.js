import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(comments => comments.data)
}