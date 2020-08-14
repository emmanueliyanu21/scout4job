const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Resume = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
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
        summary: {
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        employer: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        startDate1: {
            type: Date,
            required: true
        },
        endDate1: {
            type: Date,
            required: true
        },
        employmentSummary: {
            type: String,
            required: true
        },
        schoolName: {
            type: String,
            required: true
        },
        degreeName: {
            type: String,
            required: true
        },
        startDate2: {
            type: Date,
            required: true
        },
        endDate2: {
            type: Date,
            required: true
        },
        educationDescription: {
            type: String,
            required: true
        },
        websiteName: {
            type: String,
            required: true
        },
        linkName: {
            type: String,
            required: true
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('resume', Resume)
