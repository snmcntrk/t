// store the data

// connnect to the mongo db server
//jdbc  library java

//1.
// 1. using mongo client created by mongodb team very complex
// 2. mongoose  wrapper is created out of


//steps
// 1. Why do we need to validate the data in backend again after  a lot of different application can use our api
// thats why  need to create a schema/models

const mongoose= require("mongoose");// mongo client wrapper

mongoose.connect("mongodb://localhost:27017/Sinem", {
    useNewUrlParser:true, useUnifiedTopology:true}, error => {
    if(!error){
        console.log("Connected to the db");
    }else {
        console.log("Connection error");
    }

})// localhost thats why we dont have password and so on and credentials

// once the conncetion is done what to do next


module.exports = mongoose;