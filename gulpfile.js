const gulp = require('gulp');
const { src, dest, task, series, watch, parallel} = require("gulp")
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
const sourceMaps =  require ('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')

var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
    // return gulp.src('app/sass/**/*.sass')
    return gulp.src('src/scss/main.scss')
    .pipe(sourceMaps.init())
    // .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    // .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleanCSS()) // Опционально, закомментировать при отладке
    .pipe(sass({}).on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('dist'))
    // .pipe(browserSync.reload({stream: true}));
  });

task ('styles', function() {
    return src('src/scss/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({}).on('error', sass.logError))
    .pipe(sourceMaps.write())
    .pipe(dest('dist'));
})

task ('styles2', function() {
    return src('src/scss/main.scss')
    // .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourceMaps.write())
    .pipe(dest('dist'))
})

task ('watch', function() {
    return watch('src/scss/**/*.scss', parallel('styles'))
})