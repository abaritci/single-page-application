import ApiServices from "./ApiServices";
import {SEARCH_REPOSITORIES} from "../constants/ApiEndpoints";

class RepositoriesServices {
    getRepositories(query) {
        const {q, page, per_page} = query;
        return ApiServices.request("GET", `${SEARCH_REPOSITORIES}?q=${q}&page=${page}&per_page=${per_page}`).then(response => {
            return JSON.parse(response);
        }).catch(error => {
            console.error(error);
        });
    }
}

export default new RepositoriesServices();