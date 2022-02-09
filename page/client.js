const express = require('express');
const router = express.Router()
const Slider = require('../model/slider')
const Serial = require('../model/serial')
const Kino = require('../model/kino')
const Language = require('../model/language')
const Year = require('../model/year')
const Janr = require('../model/janr')

// @api: http://localhost:3000
router.get('/', async (req, res, next) => {
    const slider = await Slider
        .find()
        .populate(['season'])
        .populate(['kino'])
        .sort({ createdAt: -1 })
        .limit(5)
    const languages = await Language.find()
    const years = await Year.find()
    const janrs = await Janr.find()
    res.render('./client/home/index', { layout: './client/CLIENT', slider,languages, years,janrs })
})

// @api: http://localhost:3000/all/movies
router.get('/all/movies', async (req, res, next) => {
    res.render('./client/allMovie/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/all/seasons
router.get('/all/seasons', async (req, res, next) => {
    res.render('./client/allSeason/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/contact
router.get('/contact', async (req, res, next) => {
    res.render('./client/contact/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/register
router.get('/register', async (req, res, next) => {
    res.render('./client/auth/register', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/login
router.get('/login', async (req, res, next) => {
    res.render('./client/auth/login', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/messages
router.get('/messages', async (req, res, next) => {
    res.render('./client/messages/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/balans
router.get('/balanc', async (req, res, next) => {
    res.render('./client/balans/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/myVideo
router.get('/myVideo', async (req, res, next) => {
    res.render('./client/myVideo/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/basket
router.get('/basket', async (req, res, next) => {
    res.render('./client/basket/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/profile
router.get('/profile', async (req, res, next) => {
    res.render('./client/profile/index', { layout: './client/CLIENT' })
})



// @api: http://localhost:3000/category
router.get('/category', async (req, res, next) => {
    res.render('./client/category/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/category/:id
router.get('/category/:id', async (req, res, next) => {
    res.render('./client/movie/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/movie/:id
router.get('/movie/:id', async (req, res, next) => {
    res.render('./client/watchMovie/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/comment/:id
router.get('/comment/:id', async (req, res, next) => {
    res.render('./client/reply/index', { layout: './client/CLIENT' })
})
// @api: http://localhost:3000/watch_movie/:id
router.get('/watch_movie/:id', async (req, res, next) => {
    await Kino.findByIdAndUpdate(req.params.id)
        .exec(async (error, value) => {
            if (error) throw error
            else {
                value.view++
                await value.save()
                res.render('./client/watchMovie/movie', { layout: './client/CLIENT' })
            }
        })
})
// @api: http://localhost:3000/serial/:id
router.get('/serial/:id', async (req, res, next) => {
    const serials = await Serial.find({ season: req.params.id }).populate(['season'])
    res.render('./client/watchSerial/index', { layout: './client/CLIENT', serials })
})
// @api: http://localhost:3000/watch_serial/:id
router.get('/watch_serial/:id', async (req, res, next) => {
    await Serial.findByIdAndUpdate(req.params.id)
        .exec(async (error, value) => {
            if (error) throw error
            else {
                value.view++
                await value.save()
                res.render('./client/watchSerial/serial', { layout: './client/CLIENT' })
            }
        })
})



// @api: http://localhost:3000/language/:id
router.get('/language/:id', async (req, res, next) => {
    const serials = await Serial.find({ season: req.params.id }).populate(['season'])
    res.render('./client/filter/language', { layout: './client/CLIENT', serials })
})
// @api: http://localhost:3000/year/:id
router.get('/year/:id', async (req, res, next) => {
    const serials = await Serial.find({ season: req.params.id }).populate(['season'])
    res.render('./client/filter/year', { layout: './client/CLIENT', serials })
})
// @api: http://localhost:3000/janr/:id
router.get('/janr/:id', async (req, res, next) => {
    const serials = await Serial.find({ season: req.params.id }).populate(['season'])
    res.render('./client/filter/janr', { layout: './client/CLIENT', serials })
})
module.exports = router