const express = require('express')
const router = express.Router()
const language = require('../controller/language')

router.post('/create', language.createOne)
router.get('/all', language.getAll)
router.get('/:id', language.getOne)
router.put('/:id', language.updateOne)
router.delete('/:id', language.deleteOne)

module.exports = router