///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const mongoose = require('./connection');

///////////////////////////////////////////////
// Schema
///////////////////////////////////////////////

const cardSchema = new Schema({
    name: {type: String, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    cardId: {type: Number, required: true, unique: true}
});

const deckSchema = new mongoose.Schema({
        playerId: {
            type: Number, 
            required: true, 
            unique: true
        },
        cards: {
            count: [cardSchema],
            validate: [cardLimit, 'Deck cannot exceed 30 cards']
        }

});

function cardLimit(count) {
    return count.length <= 30
};


const Card = model('Card', deckSchema)


module.exports = Card