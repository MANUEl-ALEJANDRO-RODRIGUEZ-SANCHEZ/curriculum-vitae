export default function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <h1 class="title">Curriculum Vitae</h1>
        <div>
            <a href="#home" class="navLink isActiveNavLink">Home</a>
            <a href="#technologies" class="navLink">Technologies</a>
            <a href="#projects" class="navLink">Projects</a>
            <a href="#contact" class="navLink">Contact</a>
        </div>
    `;
    return $menu;
}