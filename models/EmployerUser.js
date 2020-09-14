const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmployerUserSchema = new Schema({
    companyname: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        default: true
    },
    email: {
        type: String,
        default: true
    },
    password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("employerusers", EmployerUserSchema);
