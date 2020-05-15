/**
 *
 * @param props
 * @returns {string}
 */
export const RepositoriesListComponent = (props) => {
    const {repositories} = props;
    const repositoriesItems = repositories.map(({id, name, clone_url}) => {
        return `<div id="github-repository-${id}" class="github-repository-item">
                    <h3>${name}</h3>
                    <div class="more-details">
                    <a href="${clone_url}" class="button" target="_blank">
                        More
                    </a>
                    </div>
                </div>`;
    });
    return `<div class="repositories-items">
                ${repositoriesItems}
            </div>`;
}