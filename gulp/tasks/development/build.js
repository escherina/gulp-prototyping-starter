var gulp = require('gulp');
var runSequence = require('run-sequence');

// Run all tasks needed for the build in order

gulp.task('build', function(callback) {
  runSequence('delete:development',   // delete development folder
  [
    'html',
    'sass',               // css from sass files
    'scss-lint',          // lint scss
    'scripts',            // concat js
    'jshint',             // lint js
    'images',             // copy images to assets folder
  ],
  callback);
});
