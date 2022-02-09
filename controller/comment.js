const Comment = require('../model/comment')

// @description: Kino uchun koment qoldirish
// @api: /api/comment/kino
// @method: POST
exports.KinoComment = async (req, res, next) => {
    const result = new Comment({
        name: req.body.name,
        message: req.body.message,
        kino: req.body.kino
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
// @description: Season uchun koment qoldirish
// @api: /api/comment/season
// @method: POST
exports.SeasonComment = async (req, res, next) => {
    const result = new Comment({
        name: req.body.name,
        message: req.body.message,
        season: req.body.season
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


// @description: Komment boyicha malumot olish
// @api: /api/comment/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await Comment
        .findById(req.params.id)
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}


// @description: kinoga aloqador commentlarni filtrlash
// @api: /api/comment/kino/:id
// @method: GET
exports.filterKinoComment = async (req, res, next) => {
    await Comment
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


// @description: season aloqador commentlarni filtrlash
// @api: /api/comment/season/:id
// @method: GET
exports.filterSeasonComment = async (req, res, next) => {
    await Comment
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

