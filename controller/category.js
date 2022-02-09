const category = require('../model/category')
// @description: Malumot yaratish
// @api: /api/category/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new category({
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
// @api: /api/category/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await category.findById(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}

// @description: Malumotlarni olish
// @api: /api/category/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await category.find().sort({createdAt: -1}).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
// @description: Malumotlarni tahrirlash
// @api: /api/category/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await category.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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
// @api: /api/category/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    await category.findByIdAndDelete(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json({
                message: "Deleted successfully",
                data: []
            })
        }
    })
}