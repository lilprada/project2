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
app.get('/closet', isAuthenticated, (req, res) => {
    // Use Fruits model to get all Fruits
    Clothing.find({}, (error, allCloset) => {
        res.render('Index', {
            closet: allCloset,
            username: req.session.currentUser
        })
    });
  });
  
  //index route to laundry, from Show1
  app.get('/closet/laundry', (req, res) => {
    // Use Fruits model to get all Fruits
    Clothing.find({}, (error, allLaundry) => {
        res.render('Index1', {
            laundry: allLaundry,
            username: req.session.currentUser
        })
    });
  });
  
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


  //////////////////////////////////////////
  //       SEED     GOES     HERE         //
  //////////////////////////////////////////
  
  
  //delete route
  app.delete('closet/:id', (req, res) => {
    Clothing.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/closet')
    })
  })
  
  //show route, 2nd page
  app.get('/enter', (req, res) => {
    res.render('Show1')
  })
  
  app.get('/closet/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
        res.render('Show', {
            clothing: foundClothing
        });
    });
  });
  
  app.get('/closet/laundry/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
            res.render('Show', {
            clothing: foundClothing
        });
    });
  });
  
  
  
  //edit route ((for closet))
  app.get('/closet/edit/:id', (req, res) => {
    Clothing.findById(req.params.id, (error, foundClothing) => {
        res.render('Edit', {
            clothing: foundClothing
        })
    })
  })
  
  //edit route ((for laundry?))
  app.get('/closet/laundry/edit/:id', (req, res) => {
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
  app.put('/closet/laundry/edit/:id', (req, res) => {
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