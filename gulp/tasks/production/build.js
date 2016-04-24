var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build:production', function(callback) {
  runSequence('delete:production', 'html:production',
  [
    'sass',
    'scripts',
    'images',
  ],
  [
    'optimise:css',
    'optimise:js',
    'optimise:images',
  ],
  callback);
});
