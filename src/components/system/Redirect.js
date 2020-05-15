/**
 * Redirect with following path and query
 * @param path
 * @param query
 */
export function Redirect(path, query) {
    if (query && Object.keys(query).length) {
        let queryString = '?';
        Object.keys(query).forEach((item, key) => {
            queryString += `${item}=${encodeURIComponent(query[item])}`;
            if (key < Object.keys(query).length - 1) {
                queryString += '&'
            }
        });
        window.location.href = path.concat(queryString)
    } else {
        window.location.href = path
    }
}