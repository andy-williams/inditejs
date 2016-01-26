var post = require('./../../../core/server/utils/post');
var fs = require('fs');
var path = require('path');
var assert = require('assert');

describe('utils', function() {
  describe('post', function() {
    describe('getPostSlug', function() {
      it('should get title', function() {
        var expectedSlug = 'dinosaurs.markdown';
        var slug = post.getPostSlug('2014-06-10-dinosaurs.markdown');
        assert.equal(expectedSlug, slug, 'incorrect slug');
      })
    })
  })
});