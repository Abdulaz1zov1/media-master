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
    view: {
        type: Number, default: 0
    },
    like: {
        type: Number, default: 0
    },
    dislike: {
        type: Number, default: 0
    },
    rating: {
        type: Number, default: 0
    },
    status: {
        type: Boolean, enum: [true, false], default: false
    },
    age: {
        type: mongoose.Schema.ObjectId, ref: "age", required: true
    },
    year: {
        type: mongoose.Schema.ObjectId, ref: "year", required: true
    },
    country: [{
        type: mongoose.Schema.ObjectId, ref: "country", required: true
    }],
    janr: [{
        type: mongoose.Schema.ObjectId, ref: "janr", required: true
    }],
    language: [{
        type: mongoose.Schema.ObjectId, ref: "language", required: true
    }],
    category: [{
        type: mongoose.Schema.ObjectId, ref: "category", required: true
    }],
    author: [{
        type: mongoose.Schema.ObjectId, ref: "author", required: true
    }],
    tag: [{
        type: mongoose.Schema.ObjectId, ref: "tag", required: true
    }],
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
    amount: {
        type: Number, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("kino", thisSchema)