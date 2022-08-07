const mongoose = require("mongoose");

const feedbackSchema= mongoose.Schema(
    {//rules
        email: {
            type: String,
            lowercase: true,
            required: 'Email adress is required'
        },
        name:{
            type:String,
            maxLength:50,
            required: true
        },
        feedback:{
            type:String,
            maxlength:300,
            required: 'Feedback is required'
        }
});
module.exports= mongoose.model('feedback', feedbackSchema); // collection, schema used for the collection

