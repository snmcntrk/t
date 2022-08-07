var express = require('express');
const { collection } = require('../models/profile_Schema');
var router = express.Router();

var ProfileSchema = require("../models/profile_Schema");// import the model
router.post('/add', function(req, res, next) {
  var name= req.body.name;
  var email= req.body.email;
  var phoneNumber= req.body.phoneNumber;
  var age = req.body.age;
  profile_schema= new ProfileSchema({ // use it to send the data
    email: email,
    name: name,
    phoneNumber:phoneNumber,
    age:age
  });
  // saves the data into the database
  profile_schema.save().then((data)=> {
    res.json({
      update: true
    });
  })
      .catch((err)=>{
      res.json({
        update:false
      });
  });
  //res.send(name+" "+ email+" "+feedback);
});

router.get('/getall', function(req,res, next){
  ProfileSchema.find()
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
          console.log(err);
      })
});



router.get('/getname', function(req,res, next){
  ProfileSchema.collection("profiles").find({}, { projection: { name : 1 } }).toArray( (err, result) => {
    if (result) {
    console.log(result)
    }
  })

});

router.get('/mars-user/hi', function(req,res, next){
  res.send('Hi');
});
module.exports = router;
