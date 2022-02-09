const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    video: {
        type: String, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("anotation", thisSchema) 