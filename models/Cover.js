const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cover = new Schema(
    {
        cover: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cover', Cover)
