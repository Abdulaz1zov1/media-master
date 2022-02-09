const express = require('express')
const router = express.Router()
const homepage = require('../controller/homepage')

router.get('/all', homepage.homepage)

module.exports = router