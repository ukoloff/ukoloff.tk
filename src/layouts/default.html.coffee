Block = (name, fn)=>
  z = @getBlock name
  z = fn.call z if 'function'==typeof fn
  raw z.toHTML()

(tag "!DOCTYPE", true) html: true
html ->
  head ->
    title @document.title
    Block "meta"
    meta
      "http-equiv": "X-UA-Compatible"
      content: "IE=edge"
    meta
      name: "viewport"
      content: "width=device-width, initial-scale=1"
    Block "styles", ->
      @add ["/css/flatly/bootstrap.min.css", "/css/font-awesome.min.css"]
    Block "scripts", ->
      @add ["/js/jquery.min.js", "/js/bootstrap.min.js"]
  body ->
    raw @partial "navbar"

    div class: 'container-fluid', ->
      h1 @document.title
      raw @content

    raw @partial "footer"
