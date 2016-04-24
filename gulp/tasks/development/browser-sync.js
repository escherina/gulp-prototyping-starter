var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync;

// Run the build task and start a server with browsersync
gulp.task('browsersync', ['build'], function() {
  browsersync(config);
});
