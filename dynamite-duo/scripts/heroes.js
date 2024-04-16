import { getHeroes } from "./database.js"  // at this point, there is not yet a copy of this data.

const heroes = getHeroes()  // You must invoke the function like so to get a copy of the import data

/* his function will also be exported for use in other modules and generate a string of HTML that looks like an unordered list <ul> with list items <li> */
export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}
