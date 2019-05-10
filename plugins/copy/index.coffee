# Not a plugin, just event handler
path = require 'path'
fs = require 'fs-extra'

module.exports = (files)-> (opts, done)->
  cfg =  @docpad.config
  src = cfg.srcPath
  dst = cfg.outPath
  console.log "Copy assets:\n\t- from:\t#{src}\n\t- to:#{dst}"

  wait4 = []

  for k, group of files
    fromFolder = path.join '',
      require.resolve "#{group.src.module}/package"
      '..'
      group.src.extra or ''
    toFolder = path.join dst, group.dst
    fs.mkdirp toFolder
    .catch ->
    wait4.push fs.copy fromFolder,
      toFolder,
      filter: makeFilter group.src.file

  Promise.all wait4
  .then ->
    done()
  .catch (error)->
    console.log 'OOPS', error
    process.exit 1

makeFilter = (file)->
  if file
    (src, dst)->
      fs.stat src
      .then (stat)->
        stat.isDirectory() or file == path.basename src
  else
    ->
      true
