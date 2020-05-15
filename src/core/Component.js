import {MergeComponents} from "../helpers/MergeComponents";

/**
 *
 */
export class Component {

    constructor(props) {
        this.state = {...props};
    }

    refresh() {
        const {element} = this.state;
        const component = document.getElementById(element);
        if (!component) {
            this.render();
        } else {
            const updatedContent = this.render(component.innerHTML);
            component.outerHTML = component.innerHTML.replace(component.innerHTML, updatedContent);
        }
    }

    setState(state) {
        this.state = {...this.state, ...state};
        this.refresh();
    }

    setProps(props) {
        this.props = {...this.props, ...props};
        this.getProps();
    }

    getProps() {

    }

    render(content) {
        const {element} = this.state;
        return MergeComponents([
            `<div id="${element}" class="content">${content}</div>`
        ]);
    }
}