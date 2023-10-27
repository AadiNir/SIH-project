const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dataschema = new Schema(
    {
        productid:{
            type:Number,
            required: true
        },
        field2:{
            type:String,
            required:true
        },
        field3:{
            type:String,
            required:true
        },
        field4:{
            type:String,
            required:true
        },
        field5:{
            type:String,
            required:true
        },
        field6:{
            type:String,
            required:true
        },
        field7:{
            type:String,
            required:true
        }

    }
);

module.exports = mongoose.model('data',Dataschema);