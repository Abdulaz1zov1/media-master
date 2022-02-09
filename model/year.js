const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("year", thisSchema) 