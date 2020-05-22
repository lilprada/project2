//dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
//port
const PORT = process.env.PORT || 3000;




//database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
//connect to mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
//error/success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});



//middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



///////////////////////////
//   authorization rts   //
///////////////////////////


//listener route
app.listen(PORT, () => 
console.log( 'Listening on port:', PORT));