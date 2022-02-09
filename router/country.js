const express = require('express')
const router = express.Router()
const country = require('../controller/country')

router.post('/create', country.createOne)
router.get('/all', country.getAll)
router.get('/:id', country.getOne)
router.put('/:id', country.updateOne)
router.delete('/:id', country.deleteOne)

module.exports = router