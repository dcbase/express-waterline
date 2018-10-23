var express = require('express');
var router = express.Router();
var bear = require('../controllers/bearController');

router.get('/', function(req,res){
    res.json({ message: 'Hello! welcome to our bearController! '});
});
router.get('/list', bear.list);
router.post('/create', bear.create);

module.exports = router;