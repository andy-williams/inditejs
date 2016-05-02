var path = require('path');
var dateFormat = require('dateformat');
var posts = require('./../../models/posts');
var tfs = require('./../../utils/fs');
var config = require('./../../config');
var postUtils = require('./../../../shared/utils/post');

var getPostThunk = function(src) {
  return new Promise(function(resolve, reject) {
    var filename = path.basename(src);
    tfs.readFileThunk(src).then(function(data) {
      resolve({
        id: filename,
        slug: postUtils.getPostSlug(filename),
        date: dateFormat(postUtils.getPostDate(filename), 'yyyy-mm-dd'),
        meta: postUtils.getPostMetaData(data),
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