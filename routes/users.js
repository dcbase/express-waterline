var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
    req.app.models.bear.find().exec(function(err,model){
        if(err) return res.json({ err: err },500);
        res.json(model);
    });
});

module.exports = router;
