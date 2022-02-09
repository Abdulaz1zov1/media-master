const season = require('../model/season')
const path = require('path')
const fs = require('fs')
// @description: Malumot yaratish
// @api: /api/season/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const country = []
    for (const item of req.body.country) {
        const values = item
        country.push(values)
    }
    const janr = []
    for (const item of req.body.janr) {
        const values = item
        janr.push(values)
    }
    const language = []
    for (const item of req.body.language) {
        const values = item
        language.push(values)
    }
    const category = []
    for (const item of req.body.category) {
        const values = item
        category.push(values)
    }
    const author = []
    for (const item of req.body.author) {
        const values = item
        author.push(values)
    }
    const tag = []
    for (const item of req.body.tag) {
        const values = item
        tag.push(values)
    }
    const result = new season({
        name: req.body.name,
        description: req.body.description,
        image: req.file.filename,
        age: req.body.age,
        year: req.body.year,
        country: country,
        janr: janr,
        language: language,
        category: category,
        author: author,
        tag: tag,
        amount: req.body.amount,
    })
    await result.save()
        .then(() => {
            res.json({
                status: "Success", data: result
            })
        })
        .catch((error) => {
            res.json({
                status: "Error", data: error
            })
        })
}
// @description: Malumotni olish
// @api: /api/season/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await season.findById(req.params.id)
        .populate(['country'])
        .populate(['janr'])
        .populate(['language'])
        .populate(['category'])
        .populate(['author'])
        .populate(['tag'])
        .populate(['age'])
        .populate(['year'])
        .exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
}
// @description: Malumolarni olish
// @api: /api/season/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await season.find()
        .populate(['country'])
        .populate(['janr'])
        .populate(['language'])
        .populate(['category'])
        .populate(['author'])
        .populate(['tag'])
        .populate(['age'])
        .populate(['year'])
        .sort({ createdAt: -1 })
        .exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
}
// @description: Malumotni tahrirlash
// @api: /api/season/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await season.findById(req.params.id).exec((error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(__dirname, "../public/uploads/" + data.image)
            fs.unlink(filePath, function () {
                []
            })
        }
    })
   
    await season.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {

            const country = []
            for (const item of req.body.country) {
                const values = item
                country.push(values)
            }
            const janr = []
            for (const item of req.body.janr) {
                const values = item
                janr.push(values)
            }
            const language = []
            for (const item of req.body.language) {
                const values = item
                language.push(values)
            }
            const category = []
            for (const item of req.body.category) {
                const values = item
                category.push(values)
            }
            const author = []
            for (const item of req.body.author) {
                const values = item
                author.push(values)
            }
            const tag = []
            for (const item of req.body.tag) {
                const values = item
                tag.push(values)
            }
            value.name = req.body.name
            value.description = req.body.description
            value.image = req.file.filename
            value.age = req.body.age
            value.year = req.body.year
            value.country = country
            value.janr = janr
            value.language = language
            value.category = category
            value.author = author
            value.tag = tag
            value.amount = req.body.amount
            await value.save()
                .then(() => {
                    res.json(result)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}
// @description: Malumot bittasini o'chirish
// @api: /api/season/:id
// DELETE
exports.deleteOne = async (req, res, next) => {
    // Rasmni o'chirish
    await season.findById(req.params.id)
        .exec(async (error, data) => {
            if (error) {
                throw error
            } else {
                const filePath = path.join(__dirname, "../public/uploads/" + data.image)
                fs.unlink(filePath, function () {
                    []
                })
                await season.findByIdAndDelete(req.params.id)
                res.json({
                    message: "Deleted successfully",
                    data: []
                })
            }
        })
}