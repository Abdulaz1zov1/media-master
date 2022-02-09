const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    image: {
        type: String, required: true
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
    country: [{
        type: mongoose.Schema.ObjectId, ref: "country", required: true
    }],
    year: {
        type: mongoose.Schema.ObjectId, ref: "year", required: true
    },
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
    amount: {
        type: Number, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("season", thisSchema)