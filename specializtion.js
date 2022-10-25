const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const aprogSchema = new Schema({
   sp_code:{
    type:String,
   },
   aprog:{
    type:String,
   },
   sp_name:{
    type:String,

   },
   sp_start_year:{
    type:String,

   },
   dept_code:{
    type:String,

   },
   hindi:{
    type:String,

   },
   campus:{
    type:String,

   },
})
module.exports = mongoose.model('Aprog',aprogSchema);