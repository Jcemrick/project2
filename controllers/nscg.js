///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const express = require('express');
const Deck = require('../models/nscg')
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM()
const $ = require('jquery')(dom.window);


///////////////////////////////////////////////
// Create the Router
///////////////////////////////////////////////

const router = express.Router();


///////////////////////////////////////////////
// Error Handler
///////////////////////////////////////////////
function errorHandler(error, res) {
    res.json(error);
}


///////////////////////////////////////////////
// Routes - INDUCES
///////////////////////////////////////////////
/// SEED ///
router.get('/seed', (req, res) => {

});



/// INDEX ///
router.get('/',  async (req, res) => {
    const decks = await Deck.find({}).catch((error) => errorhandler (error, res))
    res.render('nscg/index.ejs', {decks})
});




/// NEW ///
router.get('/new', (req, res) => {
    res.render('nscg/new.ejs')
});


/// DESTROY ///
router.delete('/:id', async (req, res) => {
    await Deck.findByIdAndRemove(req.params.id).catch((error) => errorHandler (error, res))
    res.redirect('/nscg')
});


/// UPDATE ///
router.put('/:id', async (req, res) => {
    await Deck.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/nscg')
});


/// CREATE ///
router.post('/', async (req, res) => {
    await Deck.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect('/nscg')
});


/// EDIT ///
router.get('/:id/edit', async (req, res) => {
    const decks = await Deck.findById(req.params.id).catch((error) => errorHandler(error, res))
        res.render('nscg/edit.ejs', {decks})
});


/// SHOW ///
router.get('/:id', async (req, res) => {
    const decks = await Deck.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render('nscg/show.ejs', {decks})
});


///////////////////////////////////////////////
// Export
///////////////////////////////////////////////
module.exports = router