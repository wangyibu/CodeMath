var gulp = require('gulp');
var copy = require('gulp-contrib-copy');
var concat = require('gulp-concat');

gulp.task('copydir1', function() {
    gulp.src('dir1/**')
        .pipe(copy())
        .pipe(gulp.dest('dir2/'));
});

gulp.task('t1', function() {
    return gulp.src('src/**/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dest'));
});


gulp.task('w1', function() {
    gulp.watch('src/**/*.js', ['t1']);
});