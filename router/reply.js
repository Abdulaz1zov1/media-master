const express = require('express')
const router = express.Router()
const reply = require('../controller/reply')

router.post('/create', reply.createOne)
router.get('/:id', reply.filterComment)

module.exports = router