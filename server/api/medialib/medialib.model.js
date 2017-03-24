 var mongoose = require('mongoose')
 var Schema = mongoose.Schema;

 var ItemSchema = new Schema({
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

module.exports = mongoose.model('items', ItemSchema);
