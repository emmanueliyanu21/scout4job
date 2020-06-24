const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePostInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.title = !isEmpty(data.title) ? data.title : "";
    data.amount = !isEmpty(data.amount) ? data.amount : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.status = !isEmpty(data.status) ? data.status : "";
    data.category = !isEmpty(data.category) ? data.category : "";
    data.stack = !isEmpty(data.stack) ? data.stack : "";
    data.experience = !isEmpty(data.experience) ? data.experience : "";
    data.content = !isEmpty(data.stack) ? data.content : "";

    // Title checks
    if (Validator.isEmpty(data.title)) {
        errors.title = "Name field is required";
    }

    // Amount checks
    if (Validator.isEmpty(data.amount)) {
        errors.amount = "Amount field is required";
    } else if (!Validator.isAmount(data.amount)) {
        errors.amount = "Amount is invalid";
    }

    // Location checks
    if (Validator.isEmpty(data.location)) {
        errors.location = "Location field is required";
    } else if (!Validator.isLocation(data.location)) {
        errors.location = "Amount is invalid";
    }

    // Status checks
    if (Validator.isEmpty(data.status)) {
        errors.status = "Status field is required";
    } else if (!Validator.isStatus(data.status)) {
        errors.status = "Status is invalid";
    }

    // Category checks
    if (Validator.isEmpty(data.category)) {
        errors.category = "Category field is required";
    } else if (!Validator.isCategory(data.category)) {
        errors.category = "Category is invalid";
    }

    // Stack checks
    if (Validator.isEmpty(data.stack)) {
        errors.stack = "Stack field is required";
    } else if (!Validator.isStack(data.stack)) {
        errors.stack = "Stack is invalid";
    }

    // Experience checks
    if (Validator.isEmpty(data.experience)) {
        errors.experience = "Experience field is required";
    } else if (!Validator.isExperience(data.experience)) {
        errors.experience = "Experience is invalid";
    }

    // Content checks
    if (Validator.isEmpty(data.content)) {
        errors.content = "Content field is required";
    } else if (!Validator.isContent(data.content)) {
        errors.content = "Content is invalid";
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    };
};