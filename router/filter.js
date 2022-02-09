const express = require('express')
const router = express.Router()
const filter = require('../controller/filter')


router.get('/language/:id', filter.filterLanguage)
router.get('/:id', filter.filterYear)


module.exports = router