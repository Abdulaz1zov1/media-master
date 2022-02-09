const express = require('express')
const router = express.Router()
const author = require('../controller/author')

router.post('/create', author.createOne)
router.get('/all', author.getAll)
router.get('/:id', author.getOne)
router.put('/:id', author.updateOne)
router.delete('/:id', author.deleteOne)

module.exports = router