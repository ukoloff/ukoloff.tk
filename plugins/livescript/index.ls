require! <[ livescript without ]>

module.exports = ->
  it.extend do
    name: \livescript
    render: render

function render(options)
  if \ls == options.in-extension and \html == options.out-extension
    options.content = options.template-data
      |> without new Function livescript.compile do
        options.content
        bare: true
