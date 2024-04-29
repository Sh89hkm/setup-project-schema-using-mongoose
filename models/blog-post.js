// models/blog-post.js
const mongoose = require('mongoose');

const { Schema } = require('mongoose');

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  authorRef: {
    type: Schema.Types.ObjectId,
    ref: 'Author', // Reference to the author document in the authors collection
    required: true
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
