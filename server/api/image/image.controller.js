'use strict';

var _ = require('lodash');
var _ = require('fs');
var Item = require('../medialib//medialib.model');

function handleError(res, err) {
  return res.send(500, err);
}

    // Creates a new item in the database
    exports.create = function(req, res) {
        console.log("Creating: " + req.body)
      Item.create(req.body, function(err, item) {
        if(err) { return handleError(res, err); }
        return res.json(201, item);
      });
    };
