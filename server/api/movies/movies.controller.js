'use strict';

var _ = require('lodash');
var Movies = require('./movies.model');



// Get a single movies
exports.search = function(req, res) {
  var titleStr
  var temp = req.params.id;
  if(temp.indexOf('+') > -1) {
    console.log('received title: ' + temp)
    titleStr = temp.split('+').join(' ');
  } else {
    titleStr = temp
  }
  // var titleStr = temp.replace(/\+/g, ' ');
  console.log('Search for movie title: ' + titleStr);
  Movies.find({ 'title': 'Woman In Black' }, function (err, movies) {
    if(err) { return handleError(res, err); }
    if(!movies) { return res.send(404); }
    return res.json(movies);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}

