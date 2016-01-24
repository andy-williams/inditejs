var utils;

module.exports = utils = {};

utils.getPostDate = function (filename) {
  var toParse = filename.slice(0, 10);
  return new Date(toParse);
};

utils.getPostSlug = function (filename) {
  return filename.slice(11);
};

utils.getPostMeta = function (fileContent) {

};

utils.getPostContent = function (fileContent) {

};