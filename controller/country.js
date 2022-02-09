const country = require('../model/country')
// @description: Malumot yaratish
// @api: /api/country/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new country({
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
// @api: /api/country/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await country.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/country/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await country.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/country/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await country.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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
// @api: /api/country/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await country.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}