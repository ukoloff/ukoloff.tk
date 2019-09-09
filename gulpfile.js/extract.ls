require! <[ path through2 ]>

module.exports = ->
  store = {}
  stream = through2.obj skip

  return-stream.promise = new Promise exec

  !function exec(resolve)
    stream.on \end !->
      resolve store

  !function skip(file, _, done)
    done!
    if file.with-out
      store.{}[path.basename file.dirname .replace /s$/ ''][file.stem] = that

  function return-stream
    stream
