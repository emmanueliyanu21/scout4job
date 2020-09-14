const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Job = new Schema(
    {
        jobTitle: {
            type: String,
            required: true
        },
        jobCompany: {
            type: String,
            required: true
        },
        jobLocation: {
            type: String,
            required: true
        },
        jobSpecialization: {
            type: String,
            required: true
        },
        jobDate: {
            type: Date,
            required: true
        },
        jobDeadline: {
            type: String,
            required: true
        },
        jobSalary: {
            type: String,
            required: true
        },
        jobNumber: {
            type: Number,
            required: true
        },
        jobRequirement: {
            type: String,
            required: true
        },
        jobResponsibility: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        }
    },
    { timestamps: true },
)

module.exports = mongoose.model('job', Job)
