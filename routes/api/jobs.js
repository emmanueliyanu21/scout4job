const express = require("express")
const router = express.Router()
const Job = require('../../models/Job')

router.post('/jobs', (req, res) => {

    const job = new Job(req.body)

    job.save().then(() => {
        return res.status(200).json({
            success: true,
            id: job._id,
            message: 'Job posting successfully created',
        })
    })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Job Posting not created',
            })
        })
}
);


module.exports = router;