const Contact = require('../model/contact')

exports.createOne = async (req, res, next) => {
    const result = new Contact({
        username: req.body.username,
        telephone: req.body.telephone,
        message: req.body.message,
    })
    await result.save()
        .then(() => { res.json(result) })
        .catch((error) => { res.json(error) })

}
exports.already_READ = async (req, res, next) => {
    await Contact.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            value.read_or_not = true
            await value.save()
                .then(() => { res.json(value) })
                .catch((error) => { res.json(error) })
        }
    })
}
exports.already_ACCESS = async (req, res, next) => {
    await Contact.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
        if (error) throw error
        else {
            value.access_or_not = true
            await value.save()
                .then(() => { res.json(value) })
                .catch((error) => { res.json(error) })
        }
    })
}
exports.userMessage = async (req, res, next) => {
    await Contact.find({ username: req.params.id }).populate(['username']).sort({createdAt: -1}).exec(async (error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })

}
exports.deleteOne = async (req, res, next) => {
    await Contact.findByIdAndDelete(req.params.id).exec((error, value) => {
        if (error) throw error
        else {
            res.json({
                success: true
            })
        }
    })
}
exports.getReadData = async (req, res, next) => {
    await Contact.find({
        read_or_not: true
    }).sort({ createdAt: -1 }).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })
}
exports.getNotReadData = async (req, res, next) => {
    await Contact.find({
        read_or_not: false
    }).sort({ createdAt: -1 }).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })
}
exports.getAccesedData = async (req, res, next) => {
    await Contact.find({
        access_or_not: true
    }).sort({ createdAt: -1 }).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })
}
exports.getNotAccesedData = async (req, res, next) => {
    await Contact.find({
        access_or_not: false
    }).sort({ createdAt: -1 }).exec((error, value) => {
        if (error) throw error
        else {
            res.json(value)
        }
    })
}


