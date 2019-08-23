const router = require('express').Router();

router.post('/token', (req, res, next) => {
    res.send('ok')
});

module.exports = router;