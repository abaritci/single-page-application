/**
 *
 * @param id
 * @param title
 * @returns {string}
 */
export const FooterComponent = ({id, title}) => {
    return `<footer id="${id}" class="footer"><div class="copyright">&copy; 2020 All Rights Reserved. ${title}</div>
</footer>`;
}