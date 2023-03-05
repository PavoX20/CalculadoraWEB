'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var operacionSchema=Schema({
    valor1:String,
    valor2:String,
    operacion:String,
    resultado:String,
    
});
module.exports=mongoose.model('Operations',operacionSchema);
