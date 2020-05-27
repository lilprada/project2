const mongoose = require('mongoose')
const Schema = mongoose.Schema


//schema
const laundrySchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    img: {type: String, required: true},
    readyToWear: Boolean
    // top: Boolean, 
    // bottom: Boolean,
    // other: Boolean
})

//create model from schema
const Laundry = mongoose.model('laundry', laundrySchema)

//export
module.exports = Laundry;