import Greeting from "./components/Greeting.js";
import Menu from "./components/Menu.js";
import ToCV from "./components/ToCV.js";
import { observeMenuLinks } from "./helpers/isActiveNavLink.js";


export function App(){
    const $root = document.getElementById("root"),
        $hr = document.createElement("hr");

    $root.innerHTML = null;
    $root.appendChild(Menu());
    $root.appendChild(Greeting());
    $root.appendChild($hr);
    $root.appendChild(ToCV());



    // Elements and links selectors
    const elementSelectors = ['#home', '#technologies', '#projects', '#contact'];
    const linkSelectors = '.navLink'; // links menu selector
    const activeClass = 'isActiveNavLink';
    observeMenuLinks(elementSelectors, linkSelectors, activeClass);
}