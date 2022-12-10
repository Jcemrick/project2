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
    description: {type: String, required: true}
});



const Cards = model('Cards', cardSchema)


module.exports = Cards