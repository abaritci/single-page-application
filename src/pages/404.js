/**
 *
 * @param element
 * @param title
 * @returns {function(*): string}
 */
export const NotFoundPageComponent = ({element,title}) => {
    return (params) => `<div id="${element}">${title} Page Not Found!</div>`;
}