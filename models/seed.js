///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////
require('dotenv').config();
const mongoose = require('./connection');
const Cards = require('./nscg');

// Setting up variables to create random cards for seed deck
const shipPlanetBase = ["Ship", "Base", "Resource Planet"]
const randomNumber = function() { return Math.floor(Math.random() * 25) };
const typeDecider = function() { 
    const randomIndex = Math.floor(Math.random() * shipPlanetBase.length)
    return shipPlanetBase[randomIndex] 
}
const imageDecider = function(type) {
    if (type === "Ship") {
        return "../../public/ship.jpeg"
    } else if (type === "Base") {
        return "../../public/base.jpeg" 
    } else if (type === "Resource Planet") {
        return ('../../public/resource.jpeg')
    }
}

// Function to push the random cards in to the new deck data
const newDeck = function() {
    const newDeckData = [];
    for (i = 0; i <= 150; i++) {
        const cardType = typeDecider();
        newDeckData.push({ 
            name: `Random ${cardType} Card`,
            image: imageDecider(cardType),
            attack: randomNumber(), 
            defense: randomNumber(), 
            type: cardType,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum`
        })
    }
    return newDeckData
}



mongoose.connection.on('open', () => {
    // Data defined
        newDeck()
    // Delete the previous data
    const seedDB = async () => {
        await Cards.deleteMany({});
        await Cards.insertMany(newDeck());
    }
    seedDB().then(() => {
        mongoose.connection.close();
    })
})