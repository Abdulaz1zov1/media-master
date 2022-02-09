const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    files: [{
        type: String, required: true
    }],
    videoTime: {
        type: String, required: true
    },
    season: {
        type: mongoose.Schema.ObjectId, ref: "season", required: true
    },
    rating: {
        type: Number, default: 0
    },
    view: {
        type: Number, default: 0
    },
    like: {
        type: Number, default: 0
    },
    dislike: {
        type: Number, default: 0
    },
    format: {
        type: String, enum: [
            'HD - 144p',
            'HD - 240p',
            'HD - 480p',
            'HD - 720p',
            'HD - 1080p'
        ],
        required: true
    },
    IMDb: {
        type: String, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("serial", thisSchema)