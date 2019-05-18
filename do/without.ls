require! <[ without ]>

module.exports = compile

function compile(options)
  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if /[.]html?[.]js$/i.test it
        try
          file = files[it]
          args = [].concat file.with-out?.args || [] .join!
          t = without new Function args, file.contents.to-string!
          t.$ = options.$
          t.id = it
          delete files[it]
          file.{}with-out.t = t
          files[it.replace /(?:[.][^.]*){2}$/ \.html] = file
        catch e
          error ||:= e
    done error
