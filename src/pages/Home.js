import {Component} from "../core/Component";
import {PreviousComponent} from "../components/partials/Previous";
/**
 *
 * @param element
 * @param title
 * @returns {function(*): string}
 */

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: props.element,
            title: props.title,
            params: props.params
        };
    }

    render() {
        const {title} = this.state;
        return super.render(`
            <h1 class="page-title">${title}</h1>
            ${PreviousComponent({})}
            <div>Welcome our Single Page Application</div>`
        )
    }


}

export default new HomeComponent({element: 'home-content', title: 'Home Page', params: {}})