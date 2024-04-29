const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// Define the schema for the author
const authorSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    nationality: {
      type: String,
      required: true
    },
    areasOfExpertise: [{
      type: String
    }]
  });

// Create the model for the author
module.exports = mongoose.model('Author', authorSchema);

