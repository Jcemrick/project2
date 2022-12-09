///////////////////////////////////////////////
// Dependencies
///////////////////////////////////////////////

require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cardsRouter = require('./controllers/nscg')
const mongoose = require('mongoose')

// Create express app
const app = express();

// Port defined 
const PORT = process.env.PORT || '4321';

// // DB connection
// const DATABASE_URL = process.env.DATABASE_URL
// const CONFIG = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(DATABASE_URL, CONFIG)

// mongoose.connection
// .on('open', () => console.log("Connected to MongoDB!"))
// .on('close', () => console.log("Disconnected from MongoDB!"))
// .on('error', () => console.log(error))

///////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////

app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));



///////////////////////////////////////////////
// Routes
///////////////////////////////////////////////

app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use('/login', cardsRouter)



///////////////////////////////////////////////
// Listener
///////////////////////////////////////////////

app.listen(PORT, () => console.log(`Listening on ${PORT}`))