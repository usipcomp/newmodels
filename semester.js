const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const aprogSchema = new Schema({
   num:{
    type:Number,
   },
   even_odd:{
    type:String,
   },
   
   
})
module.exports = mongoose.model('Aprog',aprogSchema);