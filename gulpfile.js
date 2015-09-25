var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/angularregistration/js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/angularregistration/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/angularregistration/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/angularregistration/js/**/*', ['js']);
  gulp.watch('builds/angularregistration/css/*.css', ['css']);
  gulp.watch(['builds/angularregistration/*.html',
    'builds/angularregistration/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/angularregistration/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
