const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

     email:{
          type:String,
          required: true,
          unique: true

     },
     fullName:{
          type:String,
          required: true,
     },
     lastName:{
          unique: true

     }

})


