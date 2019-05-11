~function Block(name, fn)
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
      @add <[ /css/flatly/bootstrap.min.css /css/font-awesome.min.css ]>
    Block \scripts ->
      @add <[ /js/jquery.min.js /js/bootstrap.min.js ]>
  body !->
    raw @partial \navbar

    div class: \container-fluid, !->
      h1 @document.title
      raw @content

    raw @partial \footer
