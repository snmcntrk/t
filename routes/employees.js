var express = require('express');
var router = express.Router();

router.get('/feature1', function(req, res, next) {
  res.send('Hello');
});
router.get('/feature2/:name', function(req, res, next) {
  var name= req.params.name;

  res.send('Good Morning Mr '+ name.toUpperCase());
});
module.exports = router;
