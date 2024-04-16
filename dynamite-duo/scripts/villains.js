import { getVillains } from "./database.js"  // at this point, there is not yet a copy of this data.


const villains = getVillains()  // You must invoke the function like so to get a copy of the import data


/* his function will also be exported for use in other modules and generate a string of HTML that looks like an unordered list <ul> with list items <li> */
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}
