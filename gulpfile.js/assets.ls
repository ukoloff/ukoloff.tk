require! <[
  path
  gulp gulp-debug
  ./tasks
]>

assets = gulp.parallel do
  fonts

tasks <<< {assets, fonts}

function module-root(name)
  path.dirname require.resolve "#{name}/package"

function fonts(done)
  gulp.src do
    <[ css/*.min.css fonts/* ]>
    cwd: module-root \font-awesome
    cwdbase: true
  .pipe gulp.dest \out
  .pipe gulp-debug do
    title: \Fonts
    show-files: false
