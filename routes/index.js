var express = require('express');
var router = express.Router();

/* GET home page. */
//www->app ->Routes->index.js-> / ->index.jade[rendered]

// router -> responsible for routing
// /route -> here, it is the path or the api be called
// function-> the  function to be called whenever this api/request is called
// request ->the request ->this contains the data sent by the user
//response -> we use it to give the response to the user
// next -> to deal with middlewares
/*router.get('/new_year', function(req, res, next) {
  res.render('index', { title: 'Sinem' });
});

router.get('/path2/path3', function(req, res, next) {
  res.render('path', { title: 'Sinem' });
});



router.get('/path/wish/:name', function(req, res, next) {
  res.render('wish', { name: req.params.name });
});


router.get('/api', function(req, res, next) {
  res.send('Hi Sinem');
});*/
router.get('/', function(req, res, next) {
  res.send('Hi Sinem');
});
module.exports = router;
