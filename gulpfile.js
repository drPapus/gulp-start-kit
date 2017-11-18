var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var mmq = require('gulp-merge-media-queries');

gulp.task('html',function(){
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('css', function(){
    return gulp.src('./src/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(mmq({
        log: false
      }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('img', function(){
    return gulp.src('./src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(gulp.dest('./dist/img'))
});

gulp.task('watch', function(){
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/sass/**/*.scss', ['css']);
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('build', ['html','css','img']);

gulp.task('start',['build','server', 'watch']);