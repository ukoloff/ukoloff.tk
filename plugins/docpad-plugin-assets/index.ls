require! <[ path fs-extra ]>

module.exports = ->
  extend it
    ..::<<<
      name: \assets
      write-after: write-after

function write-after(opts, done)
  cfg =  @docpad.get-config!
  src = cfg.srcPath
  dst = cfg.outPath
  console.log "Copy assets:\n\t- from:\t#{src}\n\t- to:\t#{dst}"

  wait4 = []

  for , group of @get-config!
    from-folder = if group.src?.module
      path.join do
        ''
        require.resolve "#{group.src.module}/package"
        '..'
        group.src.extra or ''
    else
      group.src
    from-folder = path.resolve src, from-folder
    to-folder = path.join dst, group.dst || ''

    fs-extra.mkdirp to-folder
    .catch ->

    wait4.push fs-extra.copy do
      from-folder
      to-folder
      filter: make-filter group.src.file

  Promise.all wait4
  .then !->
    done!
  .catch !->
    throw it

!function make-filter(file)
  return if file
    unless Array.is-array file
      file = [file]
    file = new Set file
    filter
  else
    always

  function filter(src, dst)
    unless /(?:.*\bnode_modules\b){2}/.test src
      fs-extra.stat src
      .then ->
        it.isDirectory! or file.has path.basename src

function always
  true

function extend(base)
  ``class Assets extends base{}``
