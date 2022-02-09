const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const ModalSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    uid: {
        type: String, required: true, unique: true
    },
    balance: {
        type: Number, default: 0
    },
    role: {
        type: String, enum: ["admin", "user"], default: "user"
    },
}, {
    timestamps: true
})

// Parolni hashlash
ModalSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
})

// Login qismda parolni taqqoslash
ModalSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}



module.exports = mongoose.model("user", ModalSchema)