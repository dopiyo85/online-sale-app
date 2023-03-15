
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// mongoose.set('StrictQuery', true)

let productSchema = new Schema({
   name: String,
   description: String,
   price: Number,
   quantity: Number,

})

let Product = mongoose.model('Product', productSchema)

module.exports = Product;