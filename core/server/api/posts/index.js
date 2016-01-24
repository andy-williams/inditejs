var posts = require('./../../models/posts');

module.exports.getList = function *(next) {
  this.body = posts.getList();
}