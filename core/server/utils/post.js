var fm = require('front-matter');

module.exports.getPostDate = function (filename) {
  var toParse = filename.slice(0, 10);
  return new Date(toParse);
};

module.exports.getPostSlug = function (filename) {
  return filename.slice(11);
};

module.exports.getPostMetaData = function (fileContent) {
  return fm(fileContent).attributes;
};

module.exports.getPostContent = function (fileContent) {
  return fm(fileContent).body;
};