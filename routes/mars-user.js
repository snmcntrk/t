//...............................................


// schema : user_marsSchema

// email: String [unique]
// name: String
// age: int
// bio: String
// hobby: String
// gender: String


var express = require('express');
const user_marsSchema = require('../models/user_marsSchema');
var router = express.Router();


router.get('/hi', function(req,res, next){
  res.send('Hi');
});

router.post('/add', function(req, res, next) {
  var name= req.body.name;
  var email= req.body.email;
  var bio= req.body.bio;
  var age = req.body.age;
  var hobby= req.body.hobby;
  var gender= req.body.gender;

  usermars_schema= new user_marsSchema({ // use it to send the data
    email: email,
    name: name,
    bio:bio,
    age:age,
    gender:gender,
    hobby:hobby
  });
  // saves the data into the database
  usermars_schema.save().then((data)=> {
    res.json({
      data:data,
      update: true
    });
  })
      .catch((err)=>{
      res.json({
        update:false,
        message:err.toString()
      });
  });
});
//GET /mars_user/read : to read info of 1 mars_user based on id
router.get('/read', function(req,res, next){
  var id= req.body._id;
    user_marsSchema.find({ _id:id})
        .then((data)=>{
            console.log(data);
            if(data==null|| data.length==0){
                console.log("No data found!")
                throw Error("No data found.")
            }
            res.json({
                data:data,
                data_sent:true,
            });
        })
        .catch((err)=>{
            console.log(err);
            res.json({
                message:err.toString(),
                data_sent:false,
            });
        })
});
router.get('/readall', function(req,res, next){
  user_marsSchema.find()
      .then((data)=>{
        console.log(data);
        if(data==null|| data.length==0){
          console.log("No data found!")
          throw Error("No data found.")
        }
        res.json({
          data:data,
          data_sent:true,
        });
      })
      .catch((err)=>{
        console.log(err);
        res.json({
          message:err.toString(),
          data_sent:false,
        });
      })
});

// /mars_user/updateone : to update one based on id
router.post("/updateone", function (req, res, next) {
  var _id = req.body._id;
  var name = req.body.name;
  var age = req.body.age;
  var bio = req.body.bio;
  var hobby = req.body.hobby;
  var gender = req.body.gender;
  user_marsSchema.findByIdAndUpdate( _id , { $set: {name: name, age:age,bio:bio, hobby:hobby,gender:gender} },{  
    upsert: true,
    new: true,
    runValidators: true,
    setDefaultsOnInsert: true
  })
    .then((data) => {
      console.log(data);
      if (data == null || data.length == 0) {
        console.log("No data found!");
        throw Error("No data found.");
      }
      res.json({
        data: data,
        data_sent: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.toString(),
        data_sent: false,
      });
    });
});
//GET: /mars_user/deleteuser:
router.get('/deleteuser', function(req,res, next){
  var _id = req.body._id;
  //user_marsSchema.deleteOne({ _id:_id})
  user_marsSchema.findByIdAndDelete( _id)
      .then((data)=>{
        console.log(data);
        if(data==null|| data.length==0){
          console.log("No data found!")
          throw Error("No data found.")
        }
        res.json({
          data:data,
          data_sent:true,
        });
      })
      .catch((err)=>{
        console.log(err);
        res.json({
          message:err.toString(),
          data_sent:false,
        });
      })
});

module.exports = router;

