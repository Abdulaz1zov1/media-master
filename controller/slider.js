const slider = require('../model/slider')
const path = require('path')
const fs = require('fs')
// @description: Kino uchun slider yaratish
// @api: /api/slider/kino
// @method: POST
exports.create_Slider_Kino = async (req, res, next) => {
    const result = new slider({
        file: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        kino: req.body.kino,
    })
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
}

// @description: Season uchun slider yaratish
// @api: /api/slider/season
// @method: POST
exports.create_Slider_Season = async (req, res, next) => {
    const result = new slider({
        file: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        season: req.body.season,
    })
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
}

// @description: HAmma malumotni olish uchun
// @api: /api/slider/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await slider
        .find()
        .populate(['kino'])
        .populate(['season'])
        .sort({ createdAt: -1 })
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}

// @description: Kino boyicha filtrlash
// @api: /api/slider/kino/:id
// @method: GET
exports.filter_Kino = async (req, res, next) => {
    await slider
        .find({ kino: req.params.id })
        .populate(['kino'])
        .sort({ createdAt: -1 })
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}
// @description: Season boyicha filtrlash
// @api: /api/slider/season/:id
// @method: GET
exports.filter_Season = async (req, res, next) => {
    await slider
        .find({ season: req.params.id })
        .populate(['season'])
        .sort({ createdAt: -1 })
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}

// @description: Bitta malumotni olish uchun 
// @api: /api/slider/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await slider
        .findById({ _id: req.params.id })
        .populate(['season'])
        .populate(['kino'])
        .sort({ createdAt: -1 })
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}

// @description: Sliderni tahrirlash
// @api: /api/slider/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await slider.findById(req.params.id).exec((error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(__dirname, "../public/uploads/" + data.file)
            fs.unlink(filePath, function () {
                []
            })
        }
    })
    await slider.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) throw error
        else {
            data.file = req.file.filename
            data.title = req.body.title
            data.description = req.body.description
            await data.save()
                .then(() => {
                    res.json(result)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}


// @description: Sliderni tahrirlash
// @api: /api/slider/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await slider.findById(req.params.id).exec( async (error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(__dirname, "../public/uploads/" + data.file)
            fs.unlink(filePath, function () {
                []
            })
            await slider.findByIdAndDelete(req.params.id).exec((error, data) => {
                if (error) throw error
                else {
                    res.json({
                        message: "Slider is deleted"
                    })
                }
            })
        }
    })
}