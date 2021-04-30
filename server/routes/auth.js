const express = require('express');
const router = express.Router();

router.get('/create-or-update-user', createOrUpdateUser);

exports.createOrUpdateUser = (req, res) => {
    res.json({
        data: "hit API create-or-update endpoint"
    });
}

module.exports = router;