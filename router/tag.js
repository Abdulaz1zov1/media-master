const express = require('express')
const router = express.Router()
const tag = require('../controller/tag')

router.post('/create', tag.createOne)
router.get('/all', tag.getAll)
router.get('/:id', tag.getOne)
router.put('/:id', tag.updateOne)
router.delete('/:id', tag.deleteOne)

module.exports = router