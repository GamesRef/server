var express = require('express');
var router = express.Router();
const unsplashController = require('./../controllers/unsplashController.js')
const wikiController = require('./../controllers/wikiController.js')


router.get('/unsplash/collection', unsplashController.list)
router.post('/wiki/search', wikiController.searchWiki)

module.exports = router;