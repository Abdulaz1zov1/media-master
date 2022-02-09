const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    comment: {
        type: mongoose.Schema.ObjectId, ref: "comment"
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

module.exports = mongoose.model("reply", thisSchema)