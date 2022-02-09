const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    rating: {
        type: Number, enum: [1, 2, 3, 4, 5], default: 0
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

module.exports = mongoose.model("rating", thisSchema)