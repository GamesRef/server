'use strict'

const express = require('express')
const router = express.Router()
const unsplashController = require('./../controllers/unsplashController.js')


router.get('/unsplash/collection', unsplashController.list)
// router.post('/createRepo', userController.createRepo)
// router.get('/searchRepo/:name', userController.searchRepo)
// router.delete('/unstarRepo/:owner/:repo', userController.unstarRepo)


module.exports = router     