var gulp = require('gulp')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var imageop = require('gulp-image-optimization');

//JAVASCRIPT minification
gulp.task('default',function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

//JAVASCRIPT CONCAT
gulp.task('scripts', function() {
  return gulp.src('minjs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('concatinated/javascript'));
});
 
 //SASS TO CSS
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styling/css'));
});

//SASS WATCH 
gulp.task('watch', function () {
  gulp.watch('src/sass/*.scss', ['sass']);
});

//IMAGE OPTIMISATION
gulp.task('image', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('optimised/')).on('end', cb).on('error', cb);
});

