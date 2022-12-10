///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

const express = require('express');
const Cards = require('../models/nscg')


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
// router.get('/seed', (req, res) => {

// });



/// INDEX ///
router.get('/',  async (req, res) => {
    const cards = await Cards.find({}).catch((error) => errorhandler (error, res))
    res.render('nscg/index.ejs', {cards})
});




/// NEW ///
router.get('/new', (req, res) => {
    res.render('nscg/new.ejs')
});


/// DESTROY ///
router.delete('/:id', async (req, res) => {
    await Cards.findByIdAndRemove(req.params.id).catch((error) => errorHandler (error, res))
    res.redirect('/nscg')
});


/// UPDATE ///
router.put('/:id', async (req, res) => {
    await Cards.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/index')
});


/// CREATE ///
router.post('/', async (req, res) => {
    await Cards.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect('/')
});


/// EDIT ///
router.get('/:id/edit', async (req, res) => {
    const cards = await Cards.findById(req.params.id).catch((error) => errorHandler(error, res))
        res.render('nscg/edit.ejs', {cards})
});


/// SHOW ///
router.get('/:id', async (req, res) => {
    const cards = await Cards.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render('nscg/show.ejs', {cards})
});


///////////////////////////////////////////////
// Export
///////////////////////////////////////////////
module.exports = router