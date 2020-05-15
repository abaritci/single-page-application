import {HeaderComponent} from "../components/partials/Header";
import {FooterComponent} from "../components/partials/Footer";
import {Router} from "../components/system/Router"
import {MergeComponents} from "../helpers/MergeComponents";

/**
 * MainContainer layout
 * @returns {string}
 * @constructor
 */
export function MainContainer() {
    return MergeComponents([
        HeaderComponent({id: 'header', title: 'Single Page Application'}),
        Router(),
        FooterComponent({id: 'footer', title: 'Produced by <a href="https://www.linkedin.com/in/aren-amirjanyan-928386144/" target="_blank">Aren Amirjanyan</a>'})
    ])
}