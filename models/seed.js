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
            cardId: i+1,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum!`
        })
    }
    return newDeckData
}



mongoose.connection.on('open', () => {
    // Data defined
            // const seedDeck = [
            //     { cards: newDeck()}
            // ]
            newDeck()
    // Delete the previous data
    const seedDB = async () => {
        await Deck.deleteMany({});
        await Deck.insertMany(newDeck());
    }
    seedDB().then(() => {
        mongoose.connection.close();
    })
})