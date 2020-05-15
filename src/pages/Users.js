import {UsersListComponent} from "../components/UsersList";
import {Component} from "../core/Component";
import UsersServices from "../services/UsersServices";
import {PaginationComponent} from "../components/partials/Pagination";
import {SearchComponent} from "../components/partials/Search";
import {PreviousComponent} from "../components/partials/Previous";
import {Redirect} from "../components/system/Redirect";

/**
 *
 * @param element
 * @param title
 * @returns {function(*): string}
 */
class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: props.element,
            title: props.title,
            params: props.params,
            users: [],
            usersList: '',
            loading: false,
            search: {
                q: '',
                page: 1,
                per_page: 20
            },
            total: 0
        };
        document.addEventListener("keyup", event => {
            if (event.target.id === 'search-users') {
                this.state.search.q = event.target.value;
                if (event.keyCode === 13) {
                    Redirect('/users', this.state.search)
                }
            }
        });
        document.searchUsers = () => {
            Redirect('/users', this.state.search)
        }
    }

    getProps() {
        if (this.props.search.q) {
            this.setState({loading: true, search: {...this.state.search, ...this.props.search}});
            UsersServices.getUsers(this.props.search).then(users => {
                this.setState({
                    loading: false,
                    total: users.total_count,
                    users: users.items,
                    usersList: UsersListComponent({users: users.items})
                });
            });
        }
    }

    render() {
        const {title, usersList, loading, search, total} = this.state;
        const pagination = PaginationComponent({
            path: '/users',
            q: search.q,
            currentPage: search.page,
            perPage: search.per_page,
            pages: Math.round(total / 20)
        });
        const Loading = loading ? `<div class="loader"></div>` : '';
        return super.render(`${Loading}   
            <h1 class="page-title">${total ? `Found ${total} ${title}` : `${title}`}</h1>          
            ${PreviousComponent({})}
            ${SearchComponent(
            'searchUsers()', {
                element: 'search-users',
                q: search.q,
            })} ${pagination} ${usersList} ${pagination}`)
    }


}

export default new UsersComponent({element: 'users-content', title: 'Users Page', params: {}})