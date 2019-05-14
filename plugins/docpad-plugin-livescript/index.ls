require! <[ livescript without ]>

module.exports = ->
  extend it
    ..::<<<
      name: \livescript
      render: render

function extend(base)
  ``class LiveScript extends base{}``

function render(options)
  if \ls == options.in-extension and \html == options.out-extension
    t = without new Function livescript.compile do
      options.content
      bare: true
    t.$ = @get-config!$
    options.content = t options.template-data
