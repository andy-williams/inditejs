var post = require('./../../../core/shared/utils/post');
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('utils', function() {
  describe('post', function() {
    describe('getPostSlug', function() {
      it('should get title', function() {
        var expectedSlug = 'dinosaurs';
        var slug = post.getPostSlug('2014-06-10-dinosaurs.markdown');
        assert.equal(expectedSlug, slug, 'incorrect slug');
      })

      it('should get date', function() {
        var expectedDate = new Date('2014-06-10');
        var date = post.getPostDate('2014-06-10-dinosaurs.markdown');
        assert.equal(expectedDate.toDateString(), date.toDateString());
      })

      it('should get meta data', function() {
        var expectedMetaData = {
          "layout": "post",
          "title": "Dinosaurs are extinct today",
          "subtitle": "because they lacked opposable thumbs and the brainpower to build a space program.",
          "date": new Date('2014-06-10 12:00:00'),
          "author": "Start Bootstrap",
          "header-img" : "img/post-bg-01.jpg"
        };

        var fileContent = fs.readFileSync(path.join(
          __dirname, '/../test-files/2014-06-10-dinosaurs.markdown'
        ), 'utf8');
        var metaData = post.getPostMetaData(fileContent);
        assert.deepEqual(expectedMetaData, metaData);
      })

      it('should get content', function() {
        var fileContent = fs.readFileSync(path.join(
          __dirname, '/../test-files/2014-06-10-dinosaurs.markdown'
        ), 'utf8');
        var expectedContentBody = fs.readFileSync(path.join(
          __dirname, '/../test-files/2014-06-10-dinosaurs.markdown.content.txt'
        ), 'utf8');
        var contentBody = post.getPostContent(fileContent);
        assert.equal(expectedContentBody, contentBody);
      })
    })
  })
});
