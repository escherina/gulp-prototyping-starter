var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../../config').html.production;

// Copy files to build folder if changed

gulp.task('html:production', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
