var gulp = require('gulp'),
concat = require('gulp-concat'),
cssnano = require('gulp-cssnano'),
minify = require('gulp-minify'),
rename = require('gulp-rename');

gulp.task('concat-css', function(){
  return gulp.src(['']) // List of css files paths goes here
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('rename-css', function() {
  return gulp.src('dist/all.css')
      .pipe(rename('all.min.css'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('nano-css', function() {
  return gulp.src('dist/all.min.css')
      .pipe(cssnano())
      .pipe(gulp.dest('dist/'));
});

gulp.task('concat-js', function(){
  return gulp.src(['']) // / List of js files paths goes here
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('rename-js', function() {
  return gulp.src('dist/all.js')
      .pipe(rename('all.min.js'))
      .pipe(gulp.dest('dist/'));
});

gulp.task('minify-js', function() {
  return gulp.src('dist/all.min.js')
      .pipe(minify())
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('concat-css', 'rename-css', 'nano-css', 'concat-js', 'rename-js', 'minify-js'));