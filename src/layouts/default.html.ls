~!function Block(name, fn)
  z = @get-block name
  if \function == typeof fn
    z = fn.call z
  raw z.toHTML!

tag \!DOCTYPE, true <| html: true
html !->
  head !->
    title @document.title
    Block \meta
    meta do
      \http-equiv : \X-UA-Compatible
      content: \IE=edge
    meta do
      name: \viewport
      content: "width=device-width, initial-scale=1"
    Block \styles ->
      @add <[ flatly/bootstrap font-awesome ]>.map -> "/css/#{it}.min.css"

    extra-js = @document.meta.js or []
    unless Array.is-array extra-js
      extra-js = [extra-js]
    Block \scripts ->
      @add \/theme/init.js defer: false
      @add <[ polyfill bootstrap-native ]>.map -> "/js/#{it}.min.js"
      @add extra-js.map -> "#{it}.js"
  body !->
    raw @partial \navbar

    div class: \container-fluid, !->
      h1 @document.title
      raw @content

    raw @partial \footer
