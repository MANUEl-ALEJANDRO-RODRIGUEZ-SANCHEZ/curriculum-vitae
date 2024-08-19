export default function Experience(){
    const $experience = document.createElement("section");

    $experience.id = "experience";
    $experience.classList.add("experience");
    
    $experience.innerHTML = `
        <h2>Experience</h2>
        <p>
            I have worked on multiple school projects, which stand out for their
            excellent graphic and functional presentation, here are some examples: <br> 
        </p>
        <ul>
            <li>
                Busk2: A web platform (social network) adapted to any device that
                seeks to promote urban talent in Mexico, basically users have an
                account where they demonstrate their urban talent (painting, music,
                dance, etc.) and companies or other users can hire them generating
                new jobs <br>
            </li>
            <li>
                CookApp: Web application about a recipe book for the community,
                basically a social network of recipes where anyone can participate
                and interact with more people to expand their dishes <br>
            </li>
        </ul>    
        <p>
            As a full stack web developer, I have knowledge of creating websites
            with different technologies along with databases, consuming APIs,
            cybersecurity criteria and embedded systems. <br> 
            On the other hand, I have worked as an assistant in a taco stand,
            where I obtained skills to work as a team and under pressure,
            I have also worked as a butcher, where I obtained slightly rougher
            skills such as strength and optimal driving in the city
            on a motorcycle.
        </p>
    `;
    
    return $experience;
}