var gulp = require('gulp');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var bower = require('gulp-bower');
var shell = require('gulp-shell');
var jasmine = require('gulp-jasmine');

gulp.task('bower', function() {
  return bower().pipe(gulp.dest('./lib'));
});

gulp.task('compileKnockout', ['bower'], function() {
  gulp.src('./js/app/bower_components/knockout')
    .pipe(shell('cd <%= file.path %> && npm install && grunt'));
});

gulp.task('browserify', function() {
  gulp.src('./app/js/src/index.js')
    .pipe(browserify())
    .pipe(gulp.dest('./app/js/build/'));
});

gulp.task('jasmine', function() {
  gulp.src('./spec/*spec.js')
    .pipe(jasmine());
});

gulp.task('default', ['clean', 'browserify', 'compileKnockout', 'jasmine']);

gulp.task('clean', function() {
  gulp.src(['./app/js/build/*',
            './app/js/bower_components/*'],
            { read: false })
    .pipe(clean());
});
