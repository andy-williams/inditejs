var fm = require('front-matter');

module.exports.getPostDate = function (filename) {
  var toParse = filename.slice(0, 10);
  return new Date(toParse);
};

module.exports.getPostSlug = function (filename) {
  var filenameAfterDate = filename.slice(11);
  var lastIndex = filenameAfterDate.lastIndexOf('.');
  return filenameAfterDate.slice(0, lastIndex);
};

module.exports.getPostMetaData = function (fileContent) {
  return fm(fileContent).attributes;
};

module.exports.getPostContent = function (fileContent) {
  return fm(fileContent).body;
};