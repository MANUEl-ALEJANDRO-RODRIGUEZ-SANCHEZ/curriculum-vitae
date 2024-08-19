import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";
import Experience from "./components/Experience.js";
import Footer from "./components/Footer.js";
import Greeting from "./components/Greeting.js";
import Menu from "./components/Menu.js";
import Technologies from "./components/Technologies.js";
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
    $root.appendChild(AboutMe());
    $root.appendChild(Technologies());
    $root.appendChild(Experience());
    $root.appendChild(Contact());
    $root.appendChild(Footer());



    // Elements and links selectors
    const elementSelectors = ['#home', '#technologies', '#experience', '#contact'];
    const linkSelectors = '.navLink'; // links menu selector
    const activeClass = 'isActiveNavLink';
    observeMenuLinks(elementSelectors, linkSelectors, activeClass);
}