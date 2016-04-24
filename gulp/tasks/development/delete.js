var gulp = require('gulp');
var del = require('del');
var config = require('../../config').delete.development;

// Delete everything in build/development

gulp.task('delete:development', function(callback) {
  del(config.src, callback);
});
