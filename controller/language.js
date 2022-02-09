const language = require('../model/language')
// @description: Malumot yaratish
// @api: /api/language/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new language({
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
// @api: /api/language/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await language.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/language/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await language.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/language/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await language.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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
// @api: /api/language/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await language.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}