var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');
var config = require('../../config').jshint;

gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
