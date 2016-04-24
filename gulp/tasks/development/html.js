var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../../config').html;

// Copy files to build folder if changed

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
