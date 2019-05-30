require! <[ gulp gulp-debug ]>

exports.default = hi

function hi
  gulp.src \src/**/*
  .pipe gulp-debug title: \src
  .pipe gulp.dest \out
