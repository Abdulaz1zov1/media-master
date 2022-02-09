const express = require('express')
const router = express.Router()
const year = require('../controller/year')

router.post('/create', year.createOne)
router.get('/all', year.getAll)
router.get('/:id', year.getOne)
router.put('/:id', year.updateOne)
router.delete('/:id', year.deleteOne)

module.exports = router