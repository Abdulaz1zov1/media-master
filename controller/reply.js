const Reply = require('../model/reply')

// @description: Komentga javob qaytarish
// @api: /api/reply/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const result = new Reply({
        name: req.body.name,
        message: req.body.message,
        comment: req.body.comment
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

// @description: Malumotni filtrlash
// @api: /api/reply/:id
// @method: GET
exports.filterComment = async (req, res, next) => {
    await Reply
        .find({ comment: req.params.id })
        .populate(['comment'])
        .sort({ createdAt: -1 })
        .exec((error, data) => {
            if (error) throw error
            else {
                res.json(data)
            }
        })
}