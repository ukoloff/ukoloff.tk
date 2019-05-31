require! <[
  path
  gulp gulp-rename gulp-debug
  ./tasks
]>

assets = gulp.parallel do
  fonts
  themes
  scripts

tasks <<< {assets, fonts, themes, scripts}

function module-root(name)
  path.dirname require.resolve "#{name}/package"

function fonts
  gulp.src do
    <[ css/*.min.css fonts/* ]>
    # buffer: false                 # Bug (?) when overwrite: false
    cwd: module-root \font-awesome
    cwdbase: true
  .pipe gulp.dest \out overwrite: false
  .pipe gulp-debug do
    title: \Fonts
    show-files: false

function themes
  gulp.src do
    \*/bootstrap.min.css
    # buffer: false
    cwd: module-root \bootswatch
    cwdbase: true
  .pipe gulp-rename !->
    it.dirname = path.join \css it.dirname
  .pipe gulp.dest \out overwrite: false
  .pipe gulp-debug do
    title: \Themes
    show-files: false

function scripts
  gulp.src do
    'dist/{bootstrap-native,polyfill}.min.js'
    # buffer: false
    cwd: module-root \bootstrap.native
    cwdbase: true
  .pipe gulp-rename dirname: \js
  .pipe gulp.dest \out overwrite: false
  .pipe gulp-debug do
    title: \Scripts
    show-files: false
