var express = require('express');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var rightnow = moment().format('YYYYMMDD HHmmss.SSS')
  res.render('index', { title: 'Express', thedate: rightnow});
});


router.get('/cats', function(req, res, next) {
  var rightnow = moment().format('YYYYMMDD HHmmss.SSS')
  res.render('index', { title: 'k!tt3n', thedate: rightnow });
});


module.exports = router;
