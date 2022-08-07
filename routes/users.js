var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  res.send()
});

router.get('/:name', function(req, res, next) {
  var name = req.params.name;
  res.send('Hello Mr'+ name);
});


router.get('/:name/:name2', function(req, res, next) {
  var name = req.params.name;
  var name2 = req.params.name2;
  res.send('Hey '+ name+ name2);
});
*/

//post request response with hi
// can not be called from my browser
// only can be called by postman
router.post('/', function(req, res, next) {
  res.send('Hi.');
});

router.get('/api/api', function(req, res, next) {
  res.send('Hi Sinem');
});
router.get('/:name',function(req, res, next){
  var name = req.params.name;
  res.send("Hello Mr " + name.charAt(0).toUpperCase() + name.slice(1));
});


module.exports = router;
