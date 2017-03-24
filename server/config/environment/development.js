'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
     uri: 'mongodb://localhost:27017/media_db'
    // uri: 'mongodb://test:ewd15@ds039351.mlab.com:39351/media_db'
  },

  seedDB: true
};
