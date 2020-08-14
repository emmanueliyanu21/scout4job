const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cover = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        managerName: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cover', Cover)
