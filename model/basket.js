const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId, ref: "user"
    },
    serial: {
        type: mongoose.Schema.ObjectId, ref: "season"
    },
    kino: {
        type: mongoose.Schema.ObjectId, ref: "kino"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("basket", thisSchema)