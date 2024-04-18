const database = {

    fish: [
        {
            id: 1,
            image: '/images/goldSeverum.jpg',
            name: "Popeye",
            species: "Gold Severum",
            length: 7,
            from: "Orinoco River",
            diet: "dry pellets, spinach"
        },
        {
            id: 2,
            image: '/images/bichir.jpg',
            name: "Fishosaurus",
            species: "Bichir",
            length: 21,
            from: "Nile River",
            diet: "shrimp, bloodworms"
        },
        {
            id: 3,
            image: '/images/leopardBush1.jpg',
            name: "Quick Lee",
            species: "Leopard Bush",
            length: 6,
            from: "Lake Malawi",
            diet: "shrimp, bloodworms"
        },
        {
            id: 4,
            image: '/images/leopardBush2.jpg',
            name: "George W",
            species: "Leopard Bush",
            length: 8,
            from: "Lake Malawi",
            diet: "shrimp, bloodworms"
        },
        {
            id: 5,
            image: '/images/ropeFish.jpg',
            name: "Double Dutch",
            species: "Rope Fish",
            length: 24,
            from: "Cameroon",
            diet: "shrimp, bloodworms"
        },
        {
            id: 6,
            image: '/images/blueDiscus.jpg',
            name: "Zephyr",
            species: "Blue Discus",
            length: 5,
            from: "Amazon River",
            diet: "dry pellets, spinach"
        },
        {
            id: 7,
            image: '/images/balaShark.jpg',
            name: "Sharkira",
            species: "Bala Shark",
            length: 11,
            from: "Sumatra",
            diet: "shrimp, bloodworms"
        },
        {
            id: 8,
            image: '/images/angelfish.jpg',
            name: "Sky",
            species: "Angelfish",
            length: 10,
            from: "Amazon River",
            diet: "dry pellets, shrimp"
        }
    ]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

