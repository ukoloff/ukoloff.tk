require! <[ without ./buf ]>

module.exports = plugin

function plugin(options)
  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if /[.]html?[.]js$/i.test it
        try
          file = files[it]
          t = without new Function file.contents.to-string!
          t.$ = options.$
          file.with-out = t
          delete files[it]
          file<<<
            contents: buf t file
            with-out: t
          files[it.replace /(?:[.][^.]*){2}$/ \.html] = file
        catch e
          # error := e
    done error
