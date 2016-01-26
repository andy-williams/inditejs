var serve = require('koa-static');
var koa = require('koa');
var route = require('koa-route');
var Router = require('koa-router');
var mount = require('koa-mount');
var fs = require('fs');
var path = require('path');
var postsApi = require('./server/api/posts');
var tfs = require('./server/utils/fs');

var app = koa();

// server static files
app.use(mount('/public', serve(__dirname + '/../dist')));

// routes
app.use(route.get('/', editor));

function *editor() {
  this.body = yield tfs.readFileThunk(__dirname + '/server/views/editor.html');
}

// posts api
var postsRouter = new Router({
  prefix: '/api/posts'
});
postsRouter.get('/', postsApi.getList);
postsRouter.get('/:filename', postsApi.getPost);

app.use(postsRouter.routes());

app.listen(3000);
module.exports = app;