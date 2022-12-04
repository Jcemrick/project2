///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cardsRouter = require('./controllers/nscg')

const app = express();

const PORT = process.env.PORT || '4321';



///////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/public', express.static('public'));



///////////////////////////////////////////////
// Routes
///////////////////////////////////////////////

app.get('/', (req, res) => {
    res.redirect('/index')
});

app.use('/index', cardsRouter)



///////////////////////////////////////////////
// Listener
///////////////////////////////////////////////

app.listen(PORT, () => console.log(`Listening on ${PORT}`))