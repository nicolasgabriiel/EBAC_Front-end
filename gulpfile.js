const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')

function compilaSass (){
    return gulp.src('./build/styles/main.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }))
        .pipe(gulp.dest('./source/styles/main.css'))
}

function comprimirJavaScript(){
    return gulp.src('./build/scripts/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./source/scripts/main.js'))
}

function comprimirImagens(){
    return gulp.src('./build/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./source/images'))
}

exports.default = function (){
    gulp.watch('./build/styles/main.scss', { ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./build/scripts/*js', { ignoreInitial: false}, gulp.series(comprimirJavaScript))
    gulp.watch('./build/images/*', { ignoreInitial: false}, gulp.series(comprimirImagens))
}