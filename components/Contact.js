export default function Contact(){
    const $contact = document.createElement("section");

    $contact.id = "contact";
    $contact.classList.add("contact");
    $contact.innerHTML = `
        <h2>Contact</h2>
        <ul>
            <li>
                <img src="assets/images/icons/phone.svg" alt="phoneNumber"> (33)34881324
            </li>
            <li>
                <a href="mailto:manuel.rodriguez9120@alumnos.udg.mx" target="_blank">
                    <img src="assets/images/icons/email.svg" alt="email">
                    manuel.rodriguez9120@alumnos.udg.mx
                </a>
            </li>
            <li>
                <a href="https://github.com/MANUEL-ALEJANDRO-RODRIGUEZ-SANCHEZ" target="_blank">
                    <img src="assets/images/icons/github.svg" alt="github">
                    MANUEL-ALEJANDRO
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/kobra_gloryg/" target="_blank">
                    <img src="assets/images/icons/instagram.svg" alt="instagram">
                    kobra_gloryg
                </a>
            </li>
        </ul>
    `;

    return $contact;
}