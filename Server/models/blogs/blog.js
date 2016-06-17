var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
  Date : String,
  Title : String,
  Description : String,
  Image : String
});

var blog = mongoose.model('BlogCollection', blogSchema,'BlogCollection')
module.exports = blog
