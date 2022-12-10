///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const mongoose = require('./connection');
const { Schema , model} = mongoose;

///////////////////////////////////////////////
// Schema
///////////////////////////////////////////////

const cardSchema = new Schema({
    name: {type: String, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    cardId: {type: Number, required: true, unique: true},
    description: {type: String, required: true}
});

// const deckSchema = new Schema({      
//         cards: [cardSchema]
// });


const Deck = model('Deck', cardSchema)


module.exports = Deck