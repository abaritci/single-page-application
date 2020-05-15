import './styles/main.css';
import './styles/theme.scss';
import {MainContainer} from './layouts/MainContainer';
import {Redirect} from "./components/system/Redirect";
import {Router} from "./components/system/Router";

/**
 * Single Page Application Component
 */
class SPAComponent {
    constructor(html, element) {
        this.html = html;
        this.element = element;
    }
    render() {
        this.element.innerHTML = this.html;
    }
}

new SPAComponent(MainContainer(), document.getElementById('app')).render();