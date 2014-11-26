var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('cabrito.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
