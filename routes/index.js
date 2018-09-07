var express = require('express');
var router = express.Router();
const unsplashController = require('./../controllers/unsplashController.js')
const wikiController = require('./../controllers/wikiController.js')


router.get('/unsplash/collection', unsplashController.list)
router.post('/wiki/search', wikiController.searchWiki)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


module.exports = router;