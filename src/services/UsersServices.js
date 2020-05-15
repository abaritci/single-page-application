import ApiServices from "./ApiServices";
import {SEARCH_USERS,USERS} from "../constants/ApiEndpoints";

class UsersServices {
    constructor() {
        this.USERS = 'https://api.github.com/search/users';
        this.USER = 'https://api.github.com/users/';
    }

    getUsers(query) {
        const {q, page, per_page} = query;
        return ApiServices.request("GET", `${SEARCH_USERS}?q=${q}&page=${page}&per_page=${per_page}`).then(response => {
            return JSON.parse(response);
        }).catch(error => {
            console.error(error);
        });
    }

    getUser(username) {
        return ApiServices.request("GET", `${USERS}/${username}`)
            .then(response => JSON.parse(response))
            .catch(error => {
                console.error(error);
            });
    }

    getUserRepositories(username) {
        return ApiServices.request("GET", `${USERS}/${username}/repos`)
            .then(response => JSON.parse(response))
            .catch(error => {
                console.error(error);
            });
    }
}

export default new UsersServices();