//dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const closetControl = require('./controllers/closet.js');
const Clothing = require('./models/closet.js')
require('dotenv').config()
const userController = require('./controllers/user_controller.js')
const User = require('./models/users.js')
const session = require('express-session')
const bcrypt = require('bcrypt')

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
app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: false
}))


//controllers
app.use('/closet', closetControl)
app.use('/user', userController)



///////////////////////////
//   authorization rts   //
///////////////////////////


const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
      return next()
  } else {
      res.redirect('/sessions/new')
  }
}

//route to login page
app.get('/sessions/new', (req, res) => {
  res.render('sessions/New',
  {currentUser: req.session.currentUser})
})

// authentication AKA log in route
app.post('/sessions/', (req, res) => {
  //see if user exists
  User.findOne({
      username: req.body.username
  }, (err, foundUser) => {
      if(err) {
          res.send(err)
      } else if (!foundUser) {
          res.redirect('/user/New')
      } else {
          if(bcrypt.compareSync(req.body.password, foundUser.password)) {
              req.session.currentUser = foundUser.username
              res.redirect('/closet/enter')
          } else {
              res.send('Incorrect Password!')
          }
          
      }
  })
})

//delete session AKA log out route
app.delete('/sessions', (req, res) => {
  req.session.destroy(() => {
      res.redirect('/sessions/New')
  })
})


//listener route
app.listen(PORT, () => 
console.log( 'Listening on port:', PORT));