var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

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
	   .pipe(connect.reload())
});

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded',
      require: ['susy', 'breakpoint']
    })
     .on('error', gutil.log))
   .pipe(gulp.dest('builds/development/css'))
   .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(['components/sass/*.scss', 'components/sass/*/*.scss'], ['compass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'builds/development/',
    livereload: true
  });
});

gulp.task('default', ['js', 'compass', 'watch', 'connect']);