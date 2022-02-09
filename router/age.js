const express = require('express')
const router = express.Router()
const age = require('../controller/age')

router.post('/create', age.createOne)
router.get('/all', age.getAll)
router.get('/:id', age.getOne)
router.put('/:id', age.updateOne)
router.delete('/:id', age.deleteOne)

module.exports = router