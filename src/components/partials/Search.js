/**
 *
 * @param search
 * @param q
 * @param element
 * @returns {string}
 * @constructor
 */
export const SearchComponent = (search, {q, element}) => {
    return `<div class="search">
                <input id="${element}" name="search" value="${q}" placeholder="Search..."/>
                <button type="button" class="button" onclick="${search}">Search</button>
            </div>`;
}