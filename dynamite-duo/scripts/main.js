// Import the function references that generate the HTML lists
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`

/*
This is how JavaScript can target the existing DOM element. 
The #container is your way of specifying that you want an HTML element whose id attribute equals "container".
- reference to the <main> element
*/
const theExistingMainElement = document.querySelector("#container")

/* 
takes the whole HTML string that was built and assigns it to the .innerHTML property of the <main> element
referenced earlier in the code. 
- will replace the existing <h1>The Dynamite Duo</h1> that you manually typed in earlier in the project.
- This is accomplished by using the .innerHTML property of any HTML element.
*/
theExistingMainElement.innerHTML = theWholeEnchilada

