export default function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("footer");

    let time = new Date().getFullYear();

    $footer.innerHTML = `
        <p align="center">Copyright © ${time} Manuel Rodriguez</p>
    `;
    return $footer;
}