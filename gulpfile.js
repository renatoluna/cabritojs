var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
    gulp.src([
        'src/cabrito.js', 
        'src/modules/**.js'
    ])
    .pipe(concat('cabrito.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('min', function() {
    gulp.src([
        'src/cabrito.js', 
        'src/modules/**.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('cabrito.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
gulp.task('dist', ['build', 'min']);