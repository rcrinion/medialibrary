'use strict';

var express = require('express');
var controller = require('./movies.controller');

var router = express.Router();

router.get('/:id', controller.search);

module.exports = router;