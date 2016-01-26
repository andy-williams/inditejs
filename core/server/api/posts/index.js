var posts = require('./../../models/posts');
var tfs = require('./../../utils/fs');
var path = require('path');
var config = require('./../../config');

var getPostThunk = function(src) {
  return new Promise(function(resolve, reject) {
    tfs.readFileThunk(src).then(function(data) {
      resolve({
        content: data,
        another: 1
      });
    }, function(err) {
      reject(err);
    });
  });
};

module.exports.getList = function *(next) {
  this.body = posts.getList();
};

module.exports.getPost = function *(next) {
  console.log(this.params);
  console.log("filename is " + this.params.filename);
  console.log("fullpath is " + path.join(config.posts, this.params.filename));
  var src = path.join(config.posts, this.params.filename);
  this.body = yield getPostThunk(src);
};