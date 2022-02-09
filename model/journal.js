const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId, ref: "user"
    },
    amount: {
        type: Number, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("journal", thisSchema)