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

const Card = model('Card', cardSchema);

module.exports = Card