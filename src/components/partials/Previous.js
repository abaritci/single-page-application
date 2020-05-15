/**
 *
 * @param props
 * @returns {string}
 */
export const PreviousComponent = (props) => {
    return `<div class="previous">
                <a href="javascript: history.go(-1)" class="previous-item">&laquo; Back</a>
            </div>`;
}