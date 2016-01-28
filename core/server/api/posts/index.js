var posts = require('./../../models/posts');
var tfs = require('./../../utils/fs');
var path = require('path');
var config = require('./../../config');
var postUtils = require('./../../utils/post');

var getPostThunk = function(src) {
  return new Promise(function(resolve, reject) {
    tfs.readFileThunk(src).then(function(data) {
      resolve({
        slug: postUtils.getPostSlug(src),
        date: postUtils.getPostDate(src),
        metaData: postUtils.getPostMetaData(data),
        content: postUtils.getPostContent(data)
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
  var src = path.join(config.posts, this.params.filename);
  this.body = yield getPostThunk(src);
};