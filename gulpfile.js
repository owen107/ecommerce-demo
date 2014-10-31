var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass');

var jsSources = [
   'components/scripts/app.js',
   "components/jquery-ui.js"
];

var sassSources = ['components/sass/style.scss'];

gulp.task('js', function() {
	gulp.src(jsSources)
	   .pipe(concat('script.js'))
	   .pipe(browserify())
	   .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded',
      require: ['susy', 'breakpoint']
    }))
    .on('error', gutil.log)
   .pipe(gulp.dest('builds/development/css'))
});