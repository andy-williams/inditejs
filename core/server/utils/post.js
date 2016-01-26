var YAML = require('yamljs');

module.exports.getPostDate = function (filename) {
  var toParse = filename.slice(0, 10);
  return new Date(toParse);
};

module.exports.getPostSlug = function (filename) {
  return filename.slice(11);
};

module.exports.getPostMeta = function (fileContent) {
  var reg = /(---\n(.|[\r\n])+--\n)((.|[\s])+)/;
  var matches = fileContent.match(reg);
  if(matches) return YAML.parse(matches[1]);
  return '';
};

module.exports.getPostContent = function (fileContent) {
  var reg = /(---\n(.|[\r\n])+--\n)((.|[\s])+)/;
  var matches = fileContent.match(reg);
  if(matches) return matches[3];
  return '';
};