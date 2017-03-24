'use strict';

var express = require('express');
var controller = require('./medialib.controller');

var router = express.Router();
var multer = require('multer');

router.use(function rename(fieldname, filename, req, res){
	return req.files.originalname;
});

router.get('/:id', controller.find);
router.get('/', controller.index);
router.post('/', controller.create);

router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
