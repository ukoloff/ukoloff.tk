path = require 'path'
fs = require 'fs-extra'

module.exports = (base)->
  base.extend
    name: 'assets'

    writeAfter: (opts)->
      cfg =  @docpad.getConfig()
      src = cfg.srcPath
      dst = cfg.outPath
      console.log "Copy assets:\n\t- from:\t#{src}\n\t- to:\t#{dst}"

      wait4 = []

      for k, group of @getConfig()
        fromFolder = if group.src?.module
          path.join '',
            require.resolve "#{group.src.module}/package"
            '..'
            group.src.extra or ''
        else
          group.src
        fromFolder = path.resolve src, fromFolder
        toFolder = path.join dst, group.dst || ''
        fs.mkdirp toFolder
        .catch ->
        wait4.push fs.copy fromFolder,
          toFolder,
          filter: makeFilter group.src.file

      Promise.all wait4
      .catch (error)->
        throw error

makeFilter = (file)->
  if file
    (src, dst)->
      fs.stat src
      .then (stat)->
        stat.isDirectory() or file == path.basename src
  else
    ->
      true
