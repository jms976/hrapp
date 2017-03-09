var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    /*var _url;

    //req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);
    res.end('The currnet time is ' + Date.now());*/
    res.render('index', { title: 'Express' });
});

module.exports = router;
