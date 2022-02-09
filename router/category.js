const express = require('express')
const router = express.Router()
const category = require('../controller/category')

router.post('/create', category.createOne)
router.get('/all', category.getAll)
router.get('/:id', category.getOne)
router.put('/:id', category.updateOne)
router.delete('/:id', category.deleteOne)

module.exports = router