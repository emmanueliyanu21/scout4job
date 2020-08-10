const express = require("express")
const router = express.Router()
const Cover = require('../../models/Cover')

router.post('/covers', (req, res) => {

    const cover = new Cover(req.body)

    cover.save().then(() => {
        return res.status(200).json({
            success: true,
            id: cover._id,
            message: 'cover letter created',
        })
    })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'cover not created',
            })
        })
    }
);


module.exports = router;