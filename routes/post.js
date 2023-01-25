const router = require('express').Router();

router.post('/',(req,res) => {
    res.status(200).json(req.headers);
})


module.exports = router;