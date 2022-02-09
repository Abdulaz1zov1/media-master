const express = require('express')
const router = express.Router()
const janr = require('../controller/janr')

router.post('/create', janr.createOne)
router.get('/all', janr.getAll)
router.get('/all/:id', janr.filterJanr)
router.get('/:id', janr.getOne)
router.put('/:id', janr.updateOne)
router.delete('/:id', janr.deleteOne)

module.exports = router