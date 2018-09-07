var express = require('express');
var router = express.Router();

const unsplashController = require('./../controllers/unsplashController.js')

router.get('/unsplash/collection', unsplashController.list)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


module.exports = router;
