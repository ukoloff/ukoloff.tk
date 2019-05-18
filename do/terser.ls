require! <[ terser ./buf ]>

module.exports = plugin

function plugin(options)
  !function transform(files, metal-smith, done)
    var error
    Object.keys files
    .for-each !->
      if /[.]js$/.test it
        try
          file = files[it]
          js = terser.minify do
            file.contents.to-string!
            enclose: true
            output:
              max_line_len: 72
            source-map:
              content: \inline
              url: \inline
              # include-sources: true
          file.contents = buf js.code
        catch e
          error ||:= e
    done error
