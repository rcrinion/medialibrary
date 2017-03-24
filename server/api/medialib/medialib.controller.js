'use strict';
var _ = require('lodash')
// var datastore = require('../datastore');
var Item = require('./medialib.model');
  
    function handleError(res, err) {
      return res.send(500, err);
    }

    // Get list of library items
    exports.index = function(req, res) {
      Item.find(function (err, items) {
        if(err) { return handleError(res, err); }
        return res.json(200, items);
      });
    } ;


    // Find a single item in the library by ID
    exports.find = function(req, res) {
        console.log("Starting find for: " + req.params.id)
        Item.findById(req.params.id, function(err, result) {
            if (err) {return handleError(res, err); }
            console.log("Found: " +  JSON.stringify(result));
            return res.send(result);
      });
    };

    // Creates a new item in the database
    exports.create = function(req, res) {
        console.log("Creating: " + req.body)
      Item.create(req.body, function(err, item) {
        if(err) { return handleError(res, err); }
        return res.json(201, item);
      });
    };

    // Update an existing library item in the database.
    exports.update = function(req, res) {
       Item.findById(req.params.id, function (err, Item) {
            if(err) { return handleError(res, err); }
            console.log("Updating: " +req.body.title)
            console.log("Identified by: " + req.params.id)
            Item.title = req.body.title
            Item.artist = req.body.artist
            Item.format = req.body.format
            Item.location = req.body.location
            Item.status = req.body.status
            Item.genre = req.body.genre
            Item.imageUrl = req.body.imageUrl
            Item.snippet = req.body.snippet
            if (Item.format === 'Music') {
                Item.tracks = req.body.tracks
            } else {
                Item.details = req.body.details
            }
            Item.save(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200, 'Update successful');
            });
        });
     }

    // Deletes a customer from datastore.
    exports.destroy = function(req, res) {
        Item.findById(req.params.id, function (err, Item) {
            Item.remove(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200,'Deleted');
            });
        })
    }