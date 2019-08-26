var mongoose = require('mongoose');
var schema  = mongoose.Schema;
var schemaTypes = mongoose.Schema.Types;

var pdctschema = new schema({
    productid:{type:String,required:true},
    productname:{type:String,required:true},
    productprice:{type:String,required:true}    
});

var pdctmodel = mongoose.model("product",pdctschema,"productsnew");
module.exports = pdctmodel;