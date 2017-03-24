'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MoviesSchema = new Schema({
      title: String , 
      artist: String , 
      format: String , 
      location: String , 
      status: String , 
      genre: String , 
      imageUrl: String , 
      snippet: String , 
      details: Object , 
      tracks : Object
});

module.exports = mongoose.model('Movies', MoviesSchema);