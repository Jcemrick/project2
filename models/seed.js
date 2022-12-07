///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////
require('dotenv').config();
const mongoose = require('./connection');
const Card = require('./ncsg');

// Setting up variables to create random cards for seed deck
const randomNumber = Math.floor(Math.random() * 25) + 1;
const newCardId = [...Array(150).keys()];
const attack = randomNumber;
const defense = randomNumber;

// Function to push the random cards in to the new deck data
const newDeck = function() {
    const newDeckData = [];
    for (i = 0; i <= 150; i++) {
        newDeckData.push({ name: `Card ${newCardId[i]}`, attack: attack, defense: defense, cardId: newCardId[i] })
    }
    return newDeckData
}



mongoose.connection.on('open', () => {
    // Data defined
    newDeck();

    // Delete the previous data
    Card.deleteMany({}, (err, data) => {
        // add the seed data
        Card.create(newDeck(), (err, data) => {
            consol.log(data);
            mongoose.connection.close();
        })
    })
})