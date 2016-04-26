var gulp = require('gulp');
var config = require('../../config').watch;

// Start browsersync task and watch files for changes
gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.html, ['html'])
  gulp.watch(config.sass, ['sass', 'stylelint']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
  gulp.watch(config.images, ['images']);
});
