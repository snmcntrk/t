const mongoose = require("mongoose");

const userSchema= mongoose.Schema(
    {//rules
        
        email: {
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            type: String,
            unique: true
        },
        name:{
            type:String,
            maxLength:50,
            required: 'Name adress is required'
        },
        age:{
            type:Number,
            min:0,max:100,
            //required: 'age is required'
        },
        bio:{
            type:String,
            maxLength:50,
        },
        hobby:{
            type:String,
            maxlength:300,
           // required: 'Hobby is required'
        },
        gender:{
            type:String,
            maxlength:300,
           // required: 'Gender is required'
        }
    });
module.exports= mongoose.model('mars-users', userSchema); // collection, schema used for the collection

