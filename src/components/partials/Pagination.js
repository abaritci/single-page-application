/**
 *
 * @param props
 * @returns {string}
 */
export const PaginationComponent = (props) => {
    const {path, currentPage, pages, q, perPage} = props;
    return `<div class="pagination">
                ${currentPage > 1 ? `<a href="${path}?q=${q}&page=${parseInt(currentPage) - 1}&per_page=${perPage}" class="pagination-item">&laquo; Prev</a>` : ``}
                ${currentPage < pages ? `<a href="${path}?q=${q}&page=${parseInt(currentPage) + 1}&per_page=${perPage}" class="pagination-item">Next &raquo;</a>` : ``}
            </div>`;
}