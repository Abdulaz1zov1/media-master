const year = require('../model/year')
// @description: Malumot yaratish
// @api: /api/year/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new year({
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
// @api: /api/year/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await year.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/year/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await year.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/year/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await year.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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
// @api: /api/year/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await year.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}