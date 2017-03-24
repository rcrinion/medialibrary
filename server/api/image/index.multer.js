'use strict';

var express = require('express')
var multer  = require('multer')
 
var app = express()
app.use(multer({ dest: './images/'}))

