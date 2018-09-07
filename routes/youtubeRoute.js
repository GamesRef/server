const express = require('express');
const router = express.Router();
const { search, nextPage } = require('../controller/youtubeController')

router.post('/', search)
router.post('/next', nextPage)

module.exports = router;