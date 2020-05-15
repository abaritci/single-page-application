import Logo from "../../images/javascript.png"

/**
 * @param id
 * @param title
 * @returns {string}
 */
export const HeaderComponent = ({id, title}) => {
    const pathName = window.location.pathname;
    function isActive(path){
        return pathName === path ? 'active' : ''
    }
    return `<header id="${id}">
            <div class="logo"><a href="/" class="home-page">
            <img alt="${title}" src="${Logo}" height="50" width="auto"/>
            </a>
            </div>
            <div class="title">
            <h4>${title}</h4></div>
            </header>
                <nav class="navigation">
                <a href="/" class="menu-item ${isActive('/')}">Home</a> 
                <a href="/users" class="menu-item ${isActive('/users')}">Users</a> 
                <a href="/repositories" class="menu-item ${isActive('/repositories')}">Repositories</a>
                </nav>`;
}