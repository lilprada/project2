const mongoose = require('mongoose')
const Schema = mongoose.Schema


//schema
const clothingSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    img: {type: String, required: true},
    readyToWear: Boolean,
    top: Boolean, 
    bottom: Boolean,
    shoe: Boolean,
    accessory: Boolean
})

//create model from schema
const Clothing = mongoose.model('cltohing', clothingSchema)

//export
module.exports = Clothing;