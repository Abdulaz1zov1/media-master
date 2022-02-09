const janr = require('../model/janr')
const Kino = require('../model/kino')
const Season = require('../model/season')
// @description: Malumot yaratish
// @api: /api/janr/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new janr({
        name: req.body.name
    })
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
}

// @description: Malumotni olish
// @api: /api/janr/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await janr.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/janr/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await janr.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/janr/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await janr.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            value.name = req.body.name
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

// @description: Malumotni o'chirish
// @api: /api/janr/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await janr.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}

// @description: Malumotni filtrlash
// @api: /api/janr/all/:id
// @method: GET
exports.filterJanr = async (req, res, next) => {
    const kino = await Kino.find({ janr: req.params.id }).sort({createdAt: -1})
    const season = await Season.find({ janr: req.params.id }).sort({createdAt: -1})
    res.json({
        kino: kino,
        season: season,
    })
}