const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],

    villains: [
        {
            id: 1,
            name: "The Technomancer",
            power: "Technopathy"
        },
        {
            id: 2,
            name: "The Nullifier",
            power: "Anti-Energy Field"
        },
        {
            id: 3,
            name: "Quantum Jester",
            power: "Quantum Entanglement"
        },
        {
            id: 4,
            name: "Lady Eon",
            power: "Chronokinesis"
        }
    ]
}

/* This code copies the Hero data for use in other modules (old module.export code will not work for modules in the browser) */
export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

/* This code copies the Villain data for use in other modules (old module.export code will not work for modules in the browser) */
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
