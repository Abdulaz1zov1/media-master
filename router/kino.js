const express = require('express')
const router = express.Router()
const kino = require('../controller/kino')
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


router.post('/create', uploads.array("files", 10), kino.createOne)
router.get('/all', kino.getAll)
router.get('/filterCategory/:id', kino.filterCategory)
router.get('/:id', kino.getOne)
router.put('/:id',uploads.array("files", 10), kino.updateOne)
router.delete('/:id', kino.deleteOne)



module.exports = router