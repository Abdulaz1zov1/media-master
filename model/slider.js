const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    file: {
        type: String, required: true
    },
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    season: {
        type: mongoose.Schema.ObjectId, ref: "season"
    },
    kino: {
        type: mongoose.Schema.ObjectId, ref: "kino"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("slider", thisSchema)