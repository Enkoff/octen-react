import {urls} from "../configs/urls";

const getAll = () => {
    return fetch(urls.users)
        .then(res => res.json());
}

const getUser = (id) => {
    return fetch(`${urls.users}/${id}`)
        .then(res => res.json());
}

export const userService = {
    getAll,
    getUser
}
