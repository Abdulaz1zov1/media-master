const express = require('express')
const router = express.Router()
const slider = require('../controller/slider')
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


router.post('/kino', uploads.single("image"), slider.create_Slider_Kino)
router.post('/season', uploads.single("image"), slider.create_Slider_Season)
router.get('/all', slider.getAll)
router.get('/kino/:id', slider.filter_Kino)
router.get('/season/:id', slider.filter_Season)
router.get('/:id', slider.getOne)
router.put('/:id', uploads.single("image"),slider.updateOne )
router.delete('/:id', slider.deleteOne)


module.exports = router