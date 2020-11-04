const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');

gulp.task('sass', function(){
  return gulp.src('./src/styles/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/src/styles'))
});

gulp.task('js', function (){
  return gulp.src('./src/js/index.js')
      .pipe(babel())
      .pipe(gulp.dest('./dist/src/js'));
});

gulp.task('minify-html', function() {
  return gulp.src('./index.html')
  .pipe(htmlmin())
  .pipe(gulp.dest('./dist'));
  });

gulp.task('default', gulp.series('sass', 'js', 'minify-html'))