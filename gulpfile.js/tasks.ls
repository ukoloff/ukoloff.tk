require! <[
  fs-extra
  gulp gulp-if gulp-markdown gulp-front-matter gulp-debug
  ./livescript
]>

exports <<<
  default: hi
  clean: clean

function clean
  fs-extra.empty-dir \out

function hi
  gulp.src \src/**/* dot: true
  .pipe gulp-front-matter!
  .pipe gulp-if \**/*.md gulp-markdown!
  .pipe gulp-if \**/*.ls livescript!
  .pipe gulp.dest \out
  .pipe gulp-debug title: \src
