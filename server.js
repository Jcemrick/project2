///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cardsRouter = require('./controllers/nscg');
const userRouter = require('./controllers/user');


/// Create express app ///
const app = express();

/// Port defined ///
const PORT = process.env.PORT || '4321';


///////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));
app.use('/index', cardsRouter)
app.use('/login', userRouter)



///////////////////////////////////////////////
// Routes
///////////////////////////////////////////////

app.get('/', (req, res) => {
    res.redirect('/index')
});


///////////////////////////////////////////////
// Listener
///////////////////////////////////////////////

app.listen(PORT, () => console.log(`Listening on ${PORT}`))