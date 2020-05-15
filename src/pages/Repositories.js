import {RepositoriesListComponent} from "../components/RepositoriesList";
import {Component} from "../core/Component";
import RepositoriesServices from "../services/RepositoriesServices";
import {SearchComponent} from "../components/partials/Search";
import {PaginationComponent} from "../components/partials/Pagination";
import {PreviousComponent} from "../components/partials/Previous";
import {Redirect} from "../components/system/Redirect";

/**
 *
 * @param element
 * @param title
 * @returns {function(*): string}
 */

class RepositoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: props.element,
            title: props.title,
            params: props.params,
            repositories: [],
            repositoriesList: '',
            loading: false,
            search: {
                q: '',
                page: 1,
                per_page: 20
            },
            total: 0
        };
        document.addEventListener("keyup", event => {
            if (event.target.id === 'search-repositories') {
                this.state.search.q = event.target.value;
                if (event.keyCode === 13) {
                    Redirect('/repositories', this.state.search)
                }
            }
        });
        document.searchRepositories = () => {
            Redirect('/repositories', this.state.search)
        }
    }

    getProps() {
        if (this.props.search.q) {
            this.setState({loading: true, search: {...this.state.search, ...this.props.search}});
            RepositoriesServices.getRepositories(this.props.search).then(repositories => {
                this.setState({
                    loading: false,
                    total: repositories.total_count,
                    repositories: repositories.items,
                    repositoriesList: RepositoriesListComponent({repositories: repositories.items})
                });
            });
        }
    }

    render() {
        const {title, repositoriesList, loading, total, search} = this.state;
        const pagination = PaginationComponent({
            path: '/repositories',
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
            'searchRepositories()', {
                element: 'search-repositories',
                q: search.q,
            })} ${pagination} ${repositoriesList} ${pagination}`);
    }
}

export default new RepositoriesComponent({element: 'repositories-content', title: 'Repositories Page', params: {}})