const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.companyname = !isEmpty(data.companyname) ? data.companyname : "";
    data.country = !isEmpty(data.country) ? data.country : "";
    data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Name checks
    if (Validator.isEmpty(data.companyname)) {
        errors.companyname = "Company Name field is required";
    }

    // Country checks
    if (Validator.isEmpty(data.country)) {
        errors.country = "Country field is required";
    }

    // Phone Number checks
    if (Validator.isEmpty(data.phonenumber)) {
        errors.phonenumber = "Phone Number field is required";
    }

    // Address checks
    if (Validator.isEmpty(data.address)) {
        errors.address = "Address field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
