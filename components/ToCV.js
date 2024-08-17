export default function ToCV(){
    const $link = document.createElement("a"),
        $linkToCVContainer = document.createElement("div");

    $linkToCVContainer.classList.add("linkToCVContainer");
    $link.href = "cv.html";
    $link.classList.add("linkToCV");
    $link.textContent = "Click to see the CV";

    $linkToCVContainer.appendChild($link);

    return $linkToCVContainer;
}