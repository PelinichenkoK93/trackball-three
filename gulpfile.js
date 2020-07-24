let gulp = require('gulp')
let concatCss = require('gulp-concat-css')
let cleanCSS = require('gulp-clean-css');
let rename = require("gulp-rename");
let notify = require("gulp-notify");
let autoprefixer = require('gulp-autoprefixer');
let livereload = require('gulp-livereload');
let connect = require('gulp-connect');
let sass = require('gulp-sass');
let useref = require('gulp-useref');
let gulpif = require('gulp-if');
let uglify = require('gulp-uglify');
let minifyCss = require('gulp-clean-css');



// server connect tast
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    })
})


// css
gulp.task('css', function() {
    gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 15 versions'))
        .pipe(cleanCSS())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload())
})


// html
gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(connect.reload())
})


// watch
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series('css'))
    gulp.watch('app/index.html', gulp.series('html'))
})


//default
gulp.task('default', gulp.series(
	gulp.parallel('connect', 'html', 'css', 'watch'),
));
