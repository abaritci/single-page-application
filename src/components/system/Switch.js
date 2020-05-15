import {Redirect} from "./Redirect";

/**
 *
 * @param routes
 * @returns {void|*}
 */
export function Switch(routes) {

    const arrayCurrentRoute = window.location.pathname.split("/");

    /**
     * Find following component for current route
     */
    const isExistRoute = routes.find(route => {
        let arrayRoute = route.path.split("/");
        if (arrayRoute.length === arrayCurrentRoute.length) {
            arrayRoute = arrayRoute.map((item, key) => {
                if (item.indexOf(":") !== -1) {
                    route.params[item.replace(":", "")] = arrayCurrentRoute[key];
                    item = arrayCurrentRoute[key];
                }
                return item
            });
        }
        route.path = arrayRoute.join('/');

        return route.path === window.location.pathname;
    });

    if (isExistRoute) {
        /**
         * Set params and search query  objects new props to found component
         */
        isExistRoute.component.setProps({
            params: isExistRoute.params,
            search: searchToObject()
        });
        /**
         * render found component with already setted props
         */
        return isExistRoute.component.render();
    } else {
        return Redirect('/404');
    }
}

/**
 * Return query params with object
 * @returns {{}}
 */
function searchToObject() {
    let search = window.location.search.substring(1).split("&"),
        searchItem = {},
        item,
        key;
    for (key in search) {
        if (search[key] === "") continue;
        item = search[key].split("=");
        searchItem[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
    }
    return searchItem;
}