const express = require('express');
const router = express.Router();
const { getHeroName, searchHeroData } = require('../controllers/dotaController')

router.get('/', getHeroName)
router.get('/search', searchHeroData)

module.exports = router