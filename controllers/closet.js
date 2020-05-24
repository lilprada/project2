const express = require('express')
const closetControl = express.Router()
const mongoose = require('mongoose')
const Clothing = require('../models/closet.js')



const isAuthenticated = (req, res, next) => {
    //if user is logged in, continue on
    if(req.session.currentUser) {
        return next()
    //if not logged in, sent to new user page
    } else {
        res.redirect('/sessions/new')
    }
}



//routes


//index route to closet, from Show1
closetControl.get('/', isAuthenticated, (req, res) => {
    // Use Fruits model to get all Fruits
    Clothing.find({}, (error, allCloset) => {
        res.render('Index', {
            closet: allCloset,
            username: req.session.currentUser
        })
    });
  });
  
//index route to laundry, from Show1
 closetControl.get('/laundry', (req, res) => {
    // Use Fruits model to get all Fruits
    Clothing.find({}, (error, allLaundry) => {
        res.render('Index1', {
            laundry: allLaundry,
            username: req.session.currentUser
        })
    });
  });
  
//new route
 closetControl.get('/new', (req, res) => {
    res.render('New')
  })
  
  //create route
closetControl.post('/', (req, res) => {
    // Use Model to create Fruit Document
    Clothing.create(req.body, (error, createdClothing) => {
        // Once created - respond to client
        res.redirect('/closet');
    });
  });


  //////////////////////////////////////////
  //       SEED     GOES     HERE         //
  //////////////////////////////////////////
  
  
  //delete route
closetControl.delete('/:id', (req, res) => {
    Clothing.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/closet')
    })
  })
  
//show route, 2nd page
closetControl.get('/enter', (req, res) => {
    res.render('Show1')
  })
//show route, closet index
closetControl.get('/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
        res.render('Show', {
            clothing: foundClothing
        });
    });
  });
//show route, laundry index
closetControl.get('/laundry/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
            res.render('Show', {
            clothing: foundClothing
        });
    });
  });
  
  
  
//edit route ((for closet))
 closetControl.get('/edit/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
        res.render('Edit', {
            clothing: foundClothing
        })
    })
  })
//edit route ((for laundry?))
closetControl.get('/laundry/edit/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
      res.render('Edit', {
        clothing: foundClothing
      })
    })
  })
  
  
//update route ((for closet))
 closetControl.put('/edit/:id', (req, res) => {
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
closetControl.put('/laundry/edit/:id', (req, res) => {
    if (req.body.readyToWear === 'off') {
        req.body.readyToWear = false;
    } else {
        req.body.readyToWear = true;
    }
    Clothing.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/closet/laundry')
    })
  })
  


  

//export
module.exports = closetControl;