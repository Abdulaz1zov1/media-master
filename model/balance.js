const mongoose = require("mongoose")
const thisSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId, ref: "user"
    },
    amount: {
        type: Number, required: true
    },
    endDate: {
        type: String, required: true
    },
    status: {
        type: Boolean, required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("balance", thisSchema)