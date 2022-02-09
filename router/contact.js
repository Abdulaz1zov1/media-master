const express = require('express')
const router = express.Router()
const {
    createOne,
    already_READ,
    already_ACCESS,
    userMessage,
    deleteOne,
    getReadData,
    getNotReadData,
    getAccesedData,
    getNotAccesedData
} = require('../controller/contact')

router.post('/create', createOne)


router.get('/getReadData', getReadData)
router.get('/getNotReadData', getNotReadData)
router.get('/getAccesedData', getAccesedData)
router.get('/getNotAccesedData', getNotAccesedData)

router.get('/userMessage/:id', userMessage)
// router.get('/already_READ/:id', already_READ)
// router.get('/:id', already_ACCESS)
router.delete('/:id', deleteOne)


module.exports = router