const express = require("express")
const router = express.Router()
const Resume = require('../../models/Resume')

router.post('/resumes', (req, res) => {

        const resume = new Resume(req.body)

        resume.save().then(() => {
            return res.status(200).json({
                success: true,
                id: resume._id,
                message: 'resume item created',
            })
        })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: 'resume item not created',
                })
            })
    }
);

router.get('/resumes', async (req, res) => {
        await Resume.find({}, (err, resumes) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!resumes.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Item not found` })
            }
            return res.status(200).json({ success: true, data: resumes })
        }).catch(err => console.log(err))
    }
);

module.exports = router;