var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var config = require('./../config.js');
var postsDir = config.posts;

var Posts = function () {
  this._posts = [];
};

Posts.prototype.add = function (post) {
  this._posts.push(post);
};

Posts.prototype.getList = function () {
  return this._posts.slice(0);
};

Posts.prototype.init = function (postDir) {
  var self = this;
  fs.readdir(postsDir, function (err, files) {
    _.each(files, function (filename) {
      self.add({
        filename: filename
      });
    });
  });
};

Posts.prototype.savePost = function (post) {

};

Posts.prototype._watch = function () {
}

var posts = new Posts();
posts.init();
module.exports = posts;