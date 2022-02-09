const express = require('express');
const router = express.Router()

// @api: http://localhost:3000/admin/dashboard
router.get('/dashboard', async (req, res, next) => {
    res.render('./admin/dashboard/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/age
router.get('/age', async (req, res, next) => {
    res.render('./admin/age/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/category
router.get('/category', async (req, res, next) => {
    res.render('./admin/category/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/author
router.get('/author', async (req, res, next) => {
    res.render('./admin/author/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/country
router.get('/country', async (req, res, next) => {
    res.render('./admin/country/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/janr
router.get('/janr', async (req, res, next) => {
    res.render('./admin/janr/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/language
router.get('/language', async (req, res, next) => {
    res.render('./admin/language/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/tag
router.get('/tag', async (req, res, next) => {
    res.render('./admin/tag/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/year
router.get('/year', async (req, res, next) => {
    res.render('./admin/year/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/movie
router.get('/movie', async (req, res, next) => {
    res.render('./admin/kino/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/season
router.get('/season', async (req, res, next) => {
    res.render('./admin/season/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/serial
router.get('/serial', async (req, res, next) => {
    res.render('./admin/serial/index', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/slider
router.get('/slider', async (req, res, next) => {
    res.render('./admin/slider/index', { layout: './admin/ADMIN'})
})

// @api: http://localhost:3000/admin/contact/alreadySeen
router.get('/admin/alreadySeen', async (req, res, next) => {
    res.render('./admin/contact/alreadySeen', { layout: './admin/ADMIN'})
})
// @api: http://localhost:3000/admin/contact/notSeen
router.get('/admin/notSeen', async (req, res, next) => {
    res.render('./admin/contact/notSeen', { layout: './admin/ADMIN'})
})


module.exports = router