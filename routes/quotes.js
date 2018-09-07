var express = require('express');
var router = express.Router();
const QoutesController = require('../controllers/quoteController');

/* GET qoutes listing. */
router.get('/', QoutesController.qoutesOfTheDay)

module.exports = router;