const express = require("express")
const router = express.Router()
const data = require('../../data');

router.get('/api/jobs', (req, res) => {
    res.send(data.jobs);
});


module.exports = router;