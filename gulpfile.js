var gulp = require('gulp');
var sass = require("gulp-sass");

// 编译sass
gulp.task('sass',function() {
    return gulp.src('./scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest("./css/index.css"))
})

gulp.task("watch",function(){
    gulp.watch('./scss/index.scss',gulp.series("sass"))
})