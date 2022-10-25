const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const aprogSchema = new Schema({
   faculty_id:{
    type:Number,
   },
   m_name:{
    type:String,
   },
   address:{
    type:String,

   },
   phone:{
    type:String,

   },
   dept_code:{
    type:String,

   },
   empcode:{
    type:String,

   },
   title:{
    type:String,

   },
   desig:{
    type:String,

   },
   backacno:{
    type:String,

   },
   bankifsc:{
    type:String,

   },
   bankname:{
    type:String,

   },
   pan:{
    type:String,

   },f_name:{
    type:String,

   },l_name:{
    type:String,

   },email:{
    type:String,

   },fullname:{
    type:String,

   },

})
module.exports = mongoose.model('Aprog',aprogSchema);