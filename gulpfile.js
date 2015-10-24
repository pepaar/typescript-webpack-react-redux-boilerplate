var gulp = require('gulp');
var tslint = require('gulp-tslint');
var webpack = require('webpack-stream');

gulp.task('default', ['watch-tslint']);

gulp.task('tslint', function(){
  return gulp.src(['App/**/*.ts', 'App/**/*.tsx'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('tslint-watch', function() {
  gulp.watch(['App/**/*.ts', 'App/**/*.tsx'], ['tslint']);
});

gulp.task('webpack-watch', function() {
  return gulp.src('')
    .pipe(webpack( require('./webpack.dev.config.js') ))
    .pipe(gulp.dest('build/vscode/'));
});