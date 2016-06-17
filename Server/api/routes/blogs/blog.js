var express = require('express');
var router = express.Router();
var Blog = require('../../../models/blogs/blog');

router.route('/getBlogs')
  .get(function(req, res){
    Blog.find({},function(err,data){
      if(err){
        console.log("Error="+err);
      }
      res.send(JSON.stringify(data));
    });
});

module.exports = router;
