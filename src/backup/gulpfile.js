'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(['./sidebar-v2/src/sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest('./sidebar-v2/src/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {

  browserSync.init({
      server: ["./","./sidebar-v2/src"]
  });

  gulp.watch("./sidebar-v2/src/sass/**/*.scss", gulp.series('sass'));
  gulp.watch("./sidebar-v2/src/**/*.js").on('change', browserSync.reload);
  gulp.watch("./sidebar-v2/src/*.html").on('change', browserSync.reload);
});
 
gulp.task('default', gulp.series('serve'));