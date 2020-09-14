const express = require("express")
const router = express.Router()
const EmployerUser = require('../../models/EmployerUser');
const bcrypt = require("bcryptjs");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/employerRegister");
const validateLoginInput = require("../../validation/employerLogin");

router.get('/', (req, res) => {
    res.render('./index');
});

router.post("/employer-register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    EmployerUser.findOne({ email: req.body.email }).then(employeruser => {
        if (employeruser) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newEmployerUser = new EmployerUser({
                companyname: req.body.companyname,
                country: req.body.country,
                phonenumber: req.body.phonenumber,
                address: req.body.address,
                email: req.body.email,
                password: req.body.password
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newEmployerUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newEmployerUser.password = hash;
                    newEmployerUser
                        .save()
                        .then(employeruser => res.json(employeruser))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


router.post("/employer-login", (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    EmployerUser.findOne({ email }).then(employeruser => {
        // Check if user exists
        if (!employeruser) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, employeruser.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: employeruser.id,
                    companyname: employeruser.companyname
                };
                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;