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





//routes


//index route to closet, from Show1
app.get('/closet', (req, res) => {
  res.render('Index')
})

//index route to laundry, from Show1
app.get('/laundry', (req, res) => {
  res.render('Index1')
})

//new route
app.get('/closet/new', (req, res) => {
  res.render('New')
})

//create route
app.post('/closet', (req, res) => {
  // Use Model to create Fruit Document
  Clothing.create(req.body, (error, createdFruit) => {
      // Once created - respond to client
      res.redirect('/closet');
  });
});


//delete route
app.delete('clothing/:id', (req, res) => {
  Clothing.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/closet')
  })
})

//show route, 2nd page
app.get('/enter', (req, res) => {
  res.render('Show1')
})




//edit route ((for closet))
app.get('/closet/edit/:id', (req, res) => {
  Clothing.findById(req.params.id, (error, foundClothing) => {
      res.render('Edit', {
          clothing: foundClothing
      })
  })
})

//edit route ((for laundry?))
app.get('/laundry/edit/:id', (req, res) => {
  Clothing.findById(req.params.id, (error, foundClothing) => {
    res.render('Edit', {
      clothing: foundClothing
    })
  })
})


//update route ((for closet))
app.put('/closet/edit/:id', (req, res) => {
  if (req.body.readyToWear === 'on') {
      req.body.readyToWear = true;
  } else {
      req.body.readyToWear = false;
  }
  Clothing.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
      res.redirect('/closet')
  })
})

//update route ((for laundry?))
app.put('/laundry/edit/:id', (req, res) => {
  if (req.body.readyToWear === 'off') {
      req.body.readyToWear = false;
  } else {
      req.body.readyToWear = true;
  }
  Clothing.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
      res.redirect('/laundry')
  })
})



//listener route
app.listen(PORT, () => 
console.log( 'Listening on port:', PORT));