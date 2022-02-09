const age = require('../model/age')
// @description: Malumot yaratish
// @api: /api/age/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new age({
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
// @api: /api/age/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await age.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/age/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await age.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/age/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await age.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            value.name = req.body.name
            await value.save()
                .then(() => {
                    res.json(value)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}

// @description: Malumotni o'chirish
// @api: /api/age/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await age.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}