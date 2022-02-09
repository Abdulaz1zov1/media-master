const express = require('express')
const router = express.Router()
const serial = require('../controller/serial')
const multer = require('multer')
const md5 = require('md5')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/uploads')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
const uploads = multer({ storage: storage })


router.post('/create', uploads.array("files", 10), serial.createOne)
router.get('/all', serial.getAll)
router.get('/filter/:id', serial.filter)
router.get('/:id', serial.getOne)
router.put('/file/:id', uploads.array("files", 10), serial.updateFile)
router.put('/:id', serial.updateOne)
router.delete('/:id', serial.deleteOne)



module.exports = router