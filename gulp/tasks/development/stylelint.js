var gulp = require('gulp');
var gulpStylelint = require('gulp-stylelint');
var config = require('../../config').stylelint;

gulp.task('stylelint', function lintCssTask() {

  return gulp
    .src(config.src)
    .pipe(gulpStylelint(config.options));
});
