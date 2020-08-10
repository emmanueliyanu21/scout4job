const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Resume = new Schema(
    {
        resume: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('resume', Resume)
