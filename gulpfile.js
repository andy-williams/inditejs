var gulp = require('gulp');
var open = require('gulp-open');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var cssimport = require('gulp-cssimport');
var cssnano = require('gulp-cssnano');

var rebuild = require('koa-refresh/gulp').rebuild;
var start = require('koa-refresh/gulp').start;
var kill = require('koa-refresh/gulp').kill;

var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    serverjs: './core/server/*/**.js',
    mainjs: './core/client/index.js',
    js: './core/client/**/*.js',
    maincss: './core/client/styles/style.css',
    css: './core/client/**/*.css',
    fonts: './core/client/fonts/**/*',
    dist: './dist'
  }
}

function compilejs() {
  var bundler =
      browserify(config.paths.mainjs, {debug: true})
          .transform(babel, {
            presets: ['es2015', 'react', 'stage-1']
          });

  console.log('bundling js...');
  bundler.bundle()
      .on('error', function (err) {
        console.log(err);
        this.emit('end');
      })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.paths.dist + '/js'))
}
// compile js inc jsx
gulp.task('js', function () {
  compilejs();
});

// setup the server
gulp.task('koa', function () {
  gulp.src('index.js')
      .pipe(start({
        flags: ['--harmony']
      }));
  console.log('Server started');
});

gulp.task('koa-reset', function () {
  gulp.src('index.js')
      .pipe(rebuild());
  console.log('Server restarted');
});

gulp.task('css', function () {
  gulp.src(config.paths.maincss)
      .pipe(cssimport())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(cssnano())
      .pipe(sourcemaps.write('.', {debug: true}))
      // https://github.com/unlight/gulp-cssimport/issues/12
      .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('fonts', function() {
  gulp.src(config.paths.fonts)
      .pipe(gulp.dest(config.paths.dist + '/fonts'))
});

// live rebuild
gulp.task('watch', function () {
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.css, ['css']);
  gulp.watch(config.paths.serverjs, ['koa']);
  gulp.watch(config.paths.serverjs, ['koa-reset']);
});

gulp.task('default', ['fonts', 'js', 'css', 'koa', 'watch']);
