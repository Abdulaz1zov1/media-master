const mongoose = require('mongoose')
const ModelSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.ObjectId, ref: "user"
    },
    telephone: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    read_or_not: {
        type: String, enum: ["yes", "no"], default: "no"
    },
    access_or_not: {
        type: String, enum: ["yes", "no"], default: "no"
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('contact', ModelSchema)