// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `
            <div id="topContent__leftContainer--title">
                <h1 class="sectionHeader">Martin's Currently Owned Fish</h1>
            </div>
    <div class="fishRow">`

    // Create HTML representations of each fish here
    for (let i = 0; i < fishes.length; i++) {
        if (fishes[i].id % 5 === 0) {
            htmlString += `
            </div>
            <div class="fishRow">`  // Starting a new div container (hopefully) for new row of fish every 5th entry    
        }
        // Why is there a backtick used for this string?
        htmlString += `
        <figure class="fishImage">
            <img src="${fishes[i].image}" alt="Image of fish">
        </figure>
            <ul class="fishDetails">
                <li>Name: ${fishes[i].name}</li>
                <li>Species: ${fishes[i].species}</li>
                <li>Length: ${fishes[i].length}</li>
                <li>From: ${fishes[i].from}</li>
                <li>Diet: ${fishes[i].diet}</li>
            </ul>
`
    }
    htmlString += `</div>`

    return htmlString
}