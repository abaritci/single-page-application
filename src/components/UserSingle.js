/**
 *
 * @param props
 * @returns {string}
 */
export const UserSingleComponent = (props) => {
    const {user} = props;
    return `<div id="github-user-${user.id}" class="user-info">
                    <div class="github-user-item">
                        <a href="${user.html_url}" target="_blank">
                            <div class="github-user-item-image">
                                <img src="${user.avatar_url}" alt="${user.login}" width="100"/>
                            </div>
                        </a>
                        <hr/>
                        <h3>${user.login}</h3>
                        <h4>${user.name}</h4>
                    </div>
                    <div class="user-details">
                        ${user.bio ? `<p><span class="details-item">Bio</span> : ${user.bio}</p>` : ''}
                        ${user.blog ? `<p><span class="details-item">Blog</span> : <a href="${user.blog}" target="_blank">${user.blog}</a></p>` : ''}
                        ${user.html_url ? `<p><span class="details-item">GitHub</span> URL : <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>` : ''}
                        ${user.location ? `<p><span class="details-item">Location</span> : ${user.location}</p>` : ''}
                    </div>
                </div>`;
}