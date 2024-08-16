// Function that creates an Intersection Observer and updates active links
export function observeMenuLinks(elementsSelectors, linksSelectors, activeClass) {
    const $links = document.querySelectorAll(linksSelectors);
    
    // Function that is called when an element intersects the viewport
    function handleIntersection(entries) {
        entries.forEach(entry => {
            const element = entry.target;

            // Find the index of the current element
            const index = elementsSelectors.indexOf(`#${element.id}`);
            
            if (entry.isIntersecting) {
                // When an element enters view
                console.log(`${element.id} está en la pantalla.`);
                
                // Remove active class from all links
                $links.forEach(link => link.classList.remove(activeClass));
                
                // Add the active class to the corresponding link
                if (index > -1 && $links[index]) {
                    $links[index].classList.add(activeClass);
                }
            } 
        });
    }

    // IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as a reference container
        rootMargin: '0px', // Margin around root
        threshold: 0.1 // Percentage of the element that must be visible to trigger the callback
    });

    // Observe each element based on the provided selectors
    elementsSelectors.forEach(selector => {
        const $elements = document.querySelectorAll(selector);
        $elements.forEach(element => {
            observer.observe(element); // start observation
        });
    });
}
