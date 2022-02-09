const express = require('express')
const router = express.Router()
const comment = require('../controller/comment')

router.post('/kino', comment.KinoComment)
router.post('/season', comment.SeasonComment)
router.get('/kino/:id', comment.filterKinoComment)
router.get('/season/:id', comment.filterSeasonComment)
router.get('/:id', comment.getOne)

module.exports = router