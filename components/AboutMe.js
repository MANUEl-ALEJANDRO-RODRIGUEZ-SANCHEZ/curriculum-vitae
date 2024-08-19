export default function AboutMe(){
    const $aboutMe = document.createElement("section");
    $aboutMe.classList.add("aboutMe");

    $aboutMe.innerHTML = `
        <ul>
            <h2>About Me</h2>
            <li>
                💡 I like to explore new technologies and develop software solutions.
            </li>
            <li>
                🎓 I'm currently studying Computer engineering at the UDG - CUCEI.
            </li>
            <li>
                🌱 I'm on track for learning more about frame works web and UI.
            </li>
            <li>
                ✍️ In my free time, I like to learn web development technologies, play video games, enjoy nature, but my real hobby is driving a motorcycle.
            </li>
            <li>
                💬 Feel free to reach out to me for pro bono consulting and volunteering, or just for some interesting discussion.
            </li>
            <li>
                ✉️ You can shoot me an email at manuel.rodriguez9120@alumnos.udg.mx! I'll try to respond as soon as I can.
            </li>
            <li>
                📄 Please have a look at my Résumé for more details about me. I'm open to feedback and suggestions!
            </li>
        </ul>
        <p class="synthesis">
            Manuel Alejandro Rodriguez Sanchez <br/>
            21 years old <br/>
            Tonalá Jalisco México <br/>
            Full stack developer <br/><br/>
            Fifth semester student of computer engineering at the Universidad de Guadalajara with excellent skills and knowledge about software development in different areas and technologies. Focused on problem solving, attention to details, good time management and accustomed to working as a team.
            Prepared mainly to develop web software, as well as mobile and desktop applications along with both front-end and back-end databases, embedded systems and hardware maintenance.
        </p>
        <section class="competencies">
            <h2>Competencies</h2>
            <div>
                <p>
                    Perfectionist <br/>
                    Customer service <br/>
                    Adaptability <br/>
                    Creative <br/>
                    Collaborative work <br/>
                </p>
                <p>
                    Leadership <br/>
                    Analysis capacity <br/>
                    Fault diagnosis <br/>
                    Autodidact <br/>
                </p>
            </div>
        </section>
    `;

    return $aboutMe;
}