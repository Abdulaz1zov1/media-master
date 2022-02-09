const express = require('express')
const router = express.Router()
const season = require('../controller/season')
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


router.post('/create', uploads.single("files"), season.createOne)
router.get('/all', season.getAll)
router.get('/:id', season.getOne)
router.put('/:id',uploads.single("files"), season.updateOne)
router.delete('/:id', season.deleteOne)



module.exports = router