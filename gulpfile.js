var fs        = require('fs');
var gulp      = require('gulp');
gulp.util     = require('gulp-util');

var globs = {
  scripts: ['src/*.js', '**/*.js']
};

gulp.task( 'scripts', function(){
  return require('browserify')({
      debug: true
    })
    .add('./src/app.js')
    .bundle()
    .pipe( fs.createWriteStream('./public/dist/app.js') );
});

gulp.task( 'less', function(){
  return gulp.src('src/less/app.less')
    .pipe( require('gulp-less')() )
    .pipe( require('gulp-autoprefixer')() )
    .pipe( gulp.dest('public/dist') );
});

gulp.task('server', function() {
  gulp.src('./public')
    .pipe( require('gulp-webserver')({

    }));
});

gulp.task( 'watch', function(){
  gulp.watch( globs.scripts, ['scripts'] );
  gulp.watch( ['less/*.less', 'less/**/*.less'], ['less'] );
});

gulp.task( 'build', [ 'less', 'scripts' ] );
gulp.task( 'default', [ 'build', 'server', 'watch' ] );