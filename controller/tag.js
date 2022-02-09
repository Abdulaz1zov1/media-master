const tag = require('../model/tag')
// @description: Malumot yaratish
// @api: /api/tag/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new tag({
        name: `#${req.body.name}`
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
// @api: /api/tag/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await tag.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/tag/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await tag.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/tag/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await tag.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            value.name = `#${req.body.name}`
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
// @api: /api/tag/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await tag.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}