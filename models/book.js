// const express = require('express');
const mongoose = require('mongoose');
const bookschema = mongoose.Schema({
    title :{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    publisher:{
        name:{
            type:String,
            require:true
        },
        city:{
            cityname:{
                type:String,
                require:true
            },
            zipcode:{
                type:String,
                require:true
            }
        }
    }

});

module.exports=mongoose.model('Book',bookschema);