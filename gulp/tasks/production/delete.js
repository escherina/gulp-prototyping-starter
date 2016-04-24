var gulp = require('gulp');
var del = require('del');
var config = require('../../config').delete.production;

// Delete everything in build/production

gulp.task('delete:production', function(callback) {
  del(config.src, callback);
});
