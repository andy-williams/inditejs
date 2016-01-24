var path = require('path');
var configPath = path.join(__dirname, './../../config.json');
var Promise = require('promise');
var fs = require('fs');
var config;

console.log("about to read config...");
if (!config) {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
}

module.exports = config;