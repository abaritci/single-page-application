import HomeComponent from "../../pages/Home";
import UsersComponent from "../../pages/Users";
import UserComponent from "../../pages/User";
import RepositoriesComponent from "../../pages/Repositories";
import {NotFoundPageComponent} from "../../pages/404"
import {Switch} from "./Switch";

/**
 *
 * @param props
 * @returns {{path: *, component: *, params: (*|{})}}
 */
function Route(props) {
    const {path, params, component} = props;
    return {path, params: params || {}, component};
}

/**
 * Get component for current route or redirect in 404 page rout not exist
 * @returns {void|*}
 */
export function Router() {
    return Switch([
        Route({path: '/', component: HomeComponent}),
        Route({path: '/users', component: UsersComponent}),
        Route({
            path: '/user/:username',
            component: UserComponent
        }),
        Route({
            path: '/repositories',
            component: RepositoriesComponent
        }),
        Route({path: '/404', component: NotFoundPageComponent({element: '404-content', title: '404'})})
    ]);
}