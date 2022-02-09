const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    like: {
        type: Number, enum: [1, 0]
    },
    dislike: {
        type: Number, enum: [1, 0]
    },
    kino: {
        type: mongoose.Schema.ObjectId, ref: "kino"
    },
    serial: {
        type: mongoose.Schema.ObjectId, ref: "serial"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("favourite", thisSchema)