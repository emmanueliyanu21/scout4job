const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Job = new Schema(
    {
        job: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('job', Job)
