require! <[ path through2 ]>

module.exports = ->
  store = {}
  return through2.obj skip
    .on \end !->
      console.log store

  !function skip(file, _, done)
    done!
    if file.with-out
      store.{}[path.basename file.dirname .replace /s$/ ''][file.stem] = that
