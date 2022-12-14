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
    image: {type: String, require: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    type: {type: String, required: true},
    description: {type: String}
});



const Cards = model('Cards', cardSchema)


module.exports = Cards