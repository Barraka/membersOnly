var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const user=req.user;
    console.log('user in root get: ', user);
    res.render('index', { title: 'MembersOnly', user: user });
});

module.exports = router;
