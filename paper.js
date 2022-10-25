const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const aprogSchema = new Schema({
   sub_id:{
    type:Number,
   },
   codesub:{
    type:Number,
   },
   subject_id:{
    type:Number,
   },
   
   
})
module.exports = mongoose.model('Aprog',aprogSchema);