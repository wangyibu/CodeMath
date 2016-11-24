var gulp = require('gulp');
var copy = require('gulp-contrib-copy');

gulp.task('copydir1', function() {
    gulp.src('dir1/**')
        .pipe(copy())
        .pipe(gulp.dest('dir2/'));
});

// gulp.watch('files', ['tasks']);
// gulp.src('files')
//   .pipe(gulp.dest('build'))