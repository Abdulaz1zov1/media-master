const author = require('../model/author')
// @description: Malumot yaratish
// @api: /api/author/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new author({
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
// @api: /api/author/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await author.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/author/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await author.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/author/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await author.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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
// @api: /api/author/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await author.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}