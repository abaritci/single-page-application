import {UserSingleComponent} from "../components/UserSingle";
import {Component} from "../core/Component";
import UsersServices from "../services/UsersServices";
import {PreviousComponent} from "../components/partials/Previous";
import {RepositoriesListComponent} from "../components/RepositoriesList";

/**
 *
 * @param element
 * @param title
 * @returns {function(*): string}
 */

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: props.element,
            title: props.title,
            params: props.params,
            repositories: [],
            repositoriesList: '',
            user: {},
            userSingle: '',
            loading: false,
        };
    }

    getProps() {
        this.setState({loading: true});
        UsersServices.getUser(this.props.params.username).then(user => {
            this.setState({loading: false, user, userSingle: UserSingleComponent({user})});
        });
        UsersServices.getUserRepositories(this.props.params.username).then(repositories => {
            this.setState({
                loading: false,
                repositories,
                repositoriesList: RepositoriesListComponent({repositories: repositories})
            });
        });
    }

    render() {
        const {title, userSingle, loading, repositoriesList} = this.state;
        const Loading = loading ? `<div class="loader"></div>` : '';
        return super.render(`${Loading} 
                <h1 class="page-title">${title}</h1> 
                ${PreviousComponent({})}
                ${userSingle}
                ${repositoriesList}`)
    }


}

export default new UserComponent({element: 'user-content', title: 'User Page', params: {}})