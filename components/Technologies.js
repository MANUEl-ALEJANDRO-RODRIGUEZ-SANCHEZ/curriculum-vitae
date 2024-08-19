export default function Technologies(){
    const $technologies = document.createElement("section");
    $technologies.classList.add("technologies");
    $technologies.id = "technologies";

    $technologies.innerHTML = `
        <h2>𝗠𝘆 𝗧𝗲𝗰𝗸 𝗦𝘁𝗮𝗰𝗸</h2>
        <table>
            <tbody>
                <tr valign="top">
                    <td width="20%" align="center">
                        <span>𝗛𝗧𝗠𝗟𝟱</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/html.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>𝗖𝗦𝗦𝟯</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/css.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/js.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>React</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/react.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>Node JS</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/nodejs.svg">
                    </td>
                </tr>
                <tr valign="top">
                    <td width="20%" align="center">
                        <span>Git</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/git.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>PHP</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/php.svg">
                    </td>
                    </td><td width="20%" align="center">
                        <span>TypeSript</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/typescript.svg">
                    </td>
                    </td><td width="20%" align="center">
                        <span>MySQL</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/mysql.svg">
                    </td>
                    </td><td width="20%" align="center">
                        <span>C</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/c.svg">
                    </td>
                </tr>
                <tr valign="top">
                    </td><td width="20%" align="center">
                        <span>C++</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/c++.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>Android</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/android.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>Arduino</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/arduino.svg">
                    </td>
                    <td width="20%" align="center">
                        <span>Java</span><br><br><br>
                        <img height="64px" src="assets/images/icons/languages/java.svg">
                    </td>
                </tr>
            </tbody>
        </table>
    `;

    return $technologies;
}