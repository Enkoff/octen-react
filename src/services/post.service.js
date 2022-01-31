import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(posts => posts.data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(post => post.data),
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`).then(userPosts => userPosts.data)
}