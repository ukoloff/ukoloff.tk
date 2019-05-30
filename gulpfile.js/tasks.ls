require! <[ gulp gulp-markdown gulp-front-matter gulp-debug ]>

exports.default = hi

function hi
  gulp.src \src/**/*
  .pipe gulp-front-matter!
  .pipe gulp-markdown!
  .pipe gulp.dest \out
  .pipe gulp-debug title: \src
