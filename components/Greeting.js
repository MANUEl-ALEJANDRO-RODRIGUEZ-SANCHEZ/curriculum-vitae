export default function Greeting(){
    const d = document,
        $greetinContainer = d.createElement("div");

    $greetinContainer.classList.add("greetingContainer");
    $greetinContainer.innerHTML = `
        <img src="assets/images/manuel.jpg" alt="Manuel Rodriguez" class="authorImg"/>
            <div class="greetingTextcontainer">
                <h2 align="center" class="greeting"><b>Hi , I'm Manuel Rodriguez </b><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"></h2>
                <p align="center"> 
                <img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=1000&height=100&lines=I´m+student+at+the+UDG+-+CUCEI,+studying+computer+engineering+&hearts;++;Full+stack+web+developer+in+progress;I+love+JavaScript;;Active+Learner/Researcher,;Love+to+learn+new+stuffs...+:)">
                </p>
            </div>
    `;

    return $greetinContainer;
}