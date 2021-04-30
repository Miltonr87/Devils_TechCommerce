const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.json({
        data: "hit API user endpoint"
    });
});

module.exports = router;