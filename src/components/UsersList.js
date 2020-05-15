/**
 *
 * @param props
 * @returns {string}
 */
export const UsersListComponent = (props) => {
    const {users} = props;
    const usersItems = users.map(({id, login, avatar_url}) => {
        return `<div id="github-user-${id}" class="github-user-item">
                    <div class="github-user-item-image">
                        <img src="${avatar_url}" alt="${login}" width="100"/>
                    </div>
                    <hr/>
                    <h3>${login}</h3>
                    <div class="more-details">
                    <a href="/user/${login}" class="button">
                        More
                    </a>
                    </div>
                </div>`;
    });
    return `<div class="users-items">
                ${usersItems}
            </div>`;
}