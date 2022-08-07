var express = require('express');
var router = express.Router();

var FeedbackSchema = require("../models/feedbackSchema");// import the model
router.post('/create_feedback', function(req, res, next) {
  var name= req.body.name;
  var email= req.body.email;
  var feedback= req.body.feedback;
  feed_back_schema= new FeedbackSchema({ // use it to send the data
    email: email,
    name: name,
    feedback:feedback
  });
  // saves the data into the database
  feed_back_schema.save().then((data)=> {
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



router.post('/create_rating', function(req, res, next) {
  var name= req.body.name;
  var email= req.body.email;
  var rating = req.body.rating;
  a= {type:"number", result:"rating is not correct."}
  b= {type:"number", result:"thanks"}
   if (rating <1 || rating>5){
     res.send(a)
   }
  if (rating>=3){
    res.send(b)
  }else
  res.send('Sorry');
});
router.post('/number', function(req, res, next) {
  a ={type:"number", result:"positive"};
  var number= req.body.number;
  if(number >0){
    res.send(a);
  }else{
    res.send("Negative");
  }

});
router.post('/number2', function(req, res, next) {
  a = req.body.a;
  b = req.body.b;

  obj = {
    "val a": a,
    "val b": b
  }
  res.send(obj);
})
// Create a API that takes user input for id, name and age
// and gives back an object a containing their id+20, their name im
// reverse and their age+40
router.post('/info', function(req, res, next) {
  name = req.body.name;
  id = req.body.id;
  age = req.body.age;

  obj = {
    "id": parseInt(id) + 20,
    "name": name.split("").reverse().join(""),
    "age":parseInt(age)+40
  }
  res.send(obj);
})
module.exports = router;
