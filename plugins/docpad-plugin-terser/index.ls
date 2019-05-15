require! <[ terser ]>

module.exports = ->
  extend it
    ..::<<<
      name: \terser
      config:
        enclose: true
        output:
          max_line_len: 72
        environments:
          development:
            source-map:
              url: \inline
              include-sources: true
      render: render

function extend(base)
  ``class Terser extends base{}``

!function render(options)
  if \js == options.in-extension and \js == options.out-extension
    params = @get-config!
    delete params.environments
    z = terser.minify (Math.random!): options.content, params
    if z.error
      throw z.error
    else
      options.content = z.code
