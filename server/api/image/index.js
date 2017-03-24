'use strict';

var express = require('express');
var multer = require('multer');
var router = express.Router();
var controller = require('../medialib/medialib.controller');
/*
router.use(function rename(fieldname, filename, req, res){
	return req.files.originalname;
});
*/
router.post('/', [ multer({ 
	dest: './dist/public/images/',
    //dest:'../client/images',

	rename: function(fieldname, filename) {
    return filename;
    }
}), 

function (req, res){
    console.log(req.body) // Form data was loaded
    console.log(req.files) // Form data was loaded
    //Check if an image was uploaded, and process it.
    if(req.files.file) {
        console.log(req.files) // form files
        console.log('File saved as ' + 'images/' + req.files.file.name)
        res.send(200, req.files.file.name)
    }
    // res.redirect('/Item');
},

controller.create

]);

module.exports = router;