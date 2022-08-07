const mongoose = require("mongoose");
const profileSchema= mongoose.Schema(
    {//rules
        email: {
            type: String,
            lowercase: true,
            maxLength:10,
            required: 'Email adress is required',
            unique: true
        },
        name:{
            type:String,
            maxLength:20,
            required: true
        },
        phoneNumber:{
            type:String,
            maxLength:10
        },
        age:{
          required:false
        }
    });

module.exports= mongoose.model('profile', profileSchema); // collection, schema used for the collection
