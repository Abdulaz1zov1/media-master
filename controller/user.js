const User = require('../model/user')
const { v4: uuidv4 } = require('uuid')


exports.login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email && !password) {
        res.json("Malumotni to'liq kiriting")
    }
    if (!email) {
        res.json("Emailni kiriting")
    }
    if (!password) {
        res.json("Parolni kiriting")
    }

    const U_S_E_R = await User.findOne({ email: email }).select("password")
    if (!U_S_E_R) {
        res.json("Email xato")
    }

    const isMATCH = await U_S_E_R.matchPassword(password)
    if (!isMATCH) {
        res.json("Parol xato")
    }

    const MyData = await User.findOne({ email: email })
    if (!MyData) {
        res.json("Sessiyaga yozishda xatolik mavjud")
    }
    req.session.user = MyData
    req.session.isAuth = true
    req.session.save()
    res.json({
        success: true
    })
}
exports.logout = async (req, res, next) => {
    try {
        req.session.destroy()
        res.clearCookie("connect.sid")
        res.json({
            success: true
        })
    } catch (error) {
        res.json(error)
    }
}
exports.register_ADMIN = async (req, res, next) => {
    const result = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        uid: uuidv4()
    })
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
}
exports.register_USER = async (req, res, next) => {
    const result = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        uid: uuidv4()
    })
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
}
exports.getOne = async (req, rex, next) => {
    await User.findById(req.params.id).exec((error, data) => {
        if (error) throw error
        else {
            res.json(data)
        }
    })
}
exports.getAll = async (req, rex, next) => {
    await User.find({
        role: {
            $eq: "user"
        }
    }).exec((error, data) => {
        if (error) throw error
        else {
            res.json(data)
        }
    })
}
exports.updateOne = async (req, rex, next) => {
    await User.findByIdAndUpdate(req.params.id).exec(async(error, data) => {
        if (error) throw error
        else {
            data.name = req.body.name
            data.email = req.body.email
            data.password = req.body.password
            await data.save()
                .then(() => {
                    res.json(data)
                })
                .catch((error) => {
                    res.json(error)
                })
        }
    })
}
exports.deleteOne = async (req, rex, next) => {
    await User.findByIdAndDelete(req.params.id).exec((error, data) => {
        if (error) throw error
        else {
            res.json({
                success: true
            })
        }
    })
}

exports.getme = async (req, res, next) => {
    const user = req.session
    if(!user) {
        res.json("Session is not defined")
    }else {
        res.json(user)
    }
    
}

