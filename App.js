import Greeting from "./components/Greeting.js";


export function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.innerHTML = Greeting();

    // Router();
    // infiniteScroll();
}