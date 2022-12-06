///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const mongoose = require('./connection');

///////////////////////////////////////////////
// Schema
///////////////////////////////////////////////

const deckSchema = new mongoose.Schema({
        playerId: {
            type: Number, 
            required: true, 
            unique: true
        },
        cardCount: {
            cardId: [{
                type: Number,
                required: true
            }],
            validate: [cardLimit, 'Deck cannot exceed 30 cards']
        }

});

function cardLimit(count) {
    return count.length <= 30
};


const Deck = model('Deck', deckSchema)


module.exports = Deck