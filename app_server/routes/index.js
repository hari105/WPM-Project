var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index', { title: 'My project' });
});
/* GET homepage. */
router.get('/', ctrlMain.index);

module.exports = router;
