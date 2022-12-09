///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const express = require('express');
const Deck = require('../models/nscg')


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
    res.render('ncsg/login.ejs', {decks})
});


/// NEW ///
router.get('/new', (req, res) => {
    res.render('ncsg/new.ejs')
});


/// DESTROY ///
router.delete('/:id', async (req, res) => {
    await Deck.findByIdAndRemove(req.params.id).catch((error) => errorHandler (error, res))
    res.redirect('/nscg')
});


/// UPDATE ///
router.put('/:id', async (req, res) => {
    await Deck.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/uscg')
});


/// CREATE ///
router.post('/', async (req, res) => {
    await Deck.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect('/uscg')
});


/// EDIT ///
router.get('/:id/edit', async (req, res) => {
    const decks = await Deck.findById(req.params.id).catch((error) => errorHandler(error, res))
        res.render('uscg/edit.ejs', {decks})
});


/// SHOW ///
router.get('/:id', async (req, res) => {
    const decks = await Deck.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render('uscg/show.ejs', {decks})
});


///////////////////////////////////////////////
// Export
///////////////////////////////////////////////
module.exports = router