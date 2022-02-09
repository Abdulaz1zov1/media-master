const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    season: {
        type: mongoose.Schema.ObjectId, ref: "season"
    },
    kino: {
        type: mongoose.Schema.ObjectId, ref: "kino"
    },
    like: {
        type: Number, default: 0
    },
    dislike: {
        type: Number, default: 0
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model("comment", thisSchema)