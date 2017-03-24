'use strict';

var express = require('express');
var multer = require('multer');
var router = express.Router();

router.post('/', [ multer({ dest: '../client/images/'}), function(req, res){
    console.log(req.body) // form fields
    console.log(req.files) // form files
    res.status(204).end()
}]);

module.exports = router;