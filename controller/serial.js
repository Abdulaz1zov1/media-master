const serial = require('../model/serial')
const path = require('path')
const fs = require('fs')
// @description: Malumot yaratish
// @api: /api/serial/create
// @method: POST
exports.createOne = async (req, res, next) => {
    const urls = req.files
    const files = []
    for (let item of urls) {
        let { filename } = item
        files.push(filename)
    }
    const result = new serial({
        season: req.body.season,
        name: req.body.name,
        description: req.body.description,
        files: files,
        videoTime: req.body.videoTime,
        format: req.body.format,
        IMDb: req.body.IMDb,
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
// @description: Malumotni olish
// @api: /api/serial/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    await serial.findById(req.params.id)
        .populate(['season'])
        .exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
   
}
// @description: Malumolarni olish
// @api: /api/serial/all
// @method: GET
exports.getAll = async (req, res, next) => {
    await serial.find()
        .populate(['season'])
        // .sort({ createdAt: -1 })
        .exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
}
// @description: Malumotni tahrirlash (text)
// @api: /api/serial/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await serial.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) throw error
        else {
            data.name = req.body.name
            data.description = req.body.description
            data.videoTime = req.body.videoTime
            data.format = req.body.format
            data.IMDb = req.body.IMDb
            await data.save()
                .then(() => {
                    res.json(result)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}
// @description: Malumotni tahrirlash (file)
// @api: /api/serial/file/:id
// @method: PUT
exports.updateFile = async (req, res, next) => {

    await serial.findById(req.params.id).exec((error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(__dirname, "../public/uploads/" + data.files[0])
            fs.unlink(filePath, function () {
                []
            })
        }
    })
    await serial.findById(req.params.id).exec((error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(__dirname, "../public/uploads/" + data.files[1])
            fs.unlink(filePath, function () {
                []
            })
        }
    })

    await serial.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) throw error
        else {
            const urls = req.files
            const files = []
            for (let item of urls) {
                let { filename } = item
                files.push(filename)
            }
            data.files = files
            await data.save()
                .then(() => {
                    res.json(result)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}
// @description: Malumot bittasini o'chirish
// @api: /api/serial/:id
// DELETE
exports.deleteOne = async (req, res, next) => {
    // Rasmni o'chirish
    await serial.findById(req.params.id)
        .exec((error, data) => {
            if (error) {
                throw error
            } else {
                const filePath = path.join(__dirname, "../public/uploads/" + data.files[0])
                fs.unlink(filePath, function () {
                    []
                })
            }
        })
    // Videoni o'chirish
    await serial.findById(req.params.id)
        .exec(async (error, data) => {
            if (error) {
                throw error
            } else {
                const filePath = path.join(__dirname, "../public/uploads/" + data.files[1])
                fs.unlink(filePath, function () {
                    []
                })
                await serial.findByIdAndDelete(req.params.id)
                res.json({
                    message: "Deleted successfully",
                    data: []
                })
            }
        })
}




// @description: Seasonni id siga oid seriallarni filtrlash
// @api: /api/serial/filter/:id
// @method: GET
exports.filter = async (req, res, next) => {
    await serial.find({ season: req.params.id })
        .populate(['season'])
        .exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
}