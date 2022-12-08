///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////
require('dotenv').config();
const mongoose = require('./connection');
const Deck = require('./nscg');

// Setting up variables to create random cards for seed deck
const randomNumber = function() { return Math.floor(Math.random() * 25) };

// Function to push the random cards in to the new deck data
const newDeck = function() {
    const newDeckData = [];
    for (i = 0; i <= 150; i++) {
        newDeckData.push({ 
            name: `Card ${i+1}`, 
            attack: randomNumber(), 
            defense: randomNumber(), 
            cardId: i+1
        })
    }
    return newDeckData
}



mongoose.connection.on('open', () => {
    // Data defined
            const seedDeck = [
                { cards: newDeck()}
            ]
    // Delete the previous data
    const seedDB = async () => {
        await Deck.deleteMany({});
        await Deck.insertMany(seedDeck);
    }
    seedDB().then(() => {
        mongoose.connection.close();
    })
})