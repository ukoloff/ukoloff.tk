Block = (name, fn)=>
  z = @getBlock name
  z = fn.call z if 'function'==typeof fn
  raw z.toHTML()

(tag "!DOCTYPE", true) html: true
html ->
  head ->
    title @document.title
    Block "meta"
    Block "styles", ->
      @add ["/the.css"]
    Block "scripts"
  body ->
    div class: 'container-fluid', ->
      h1 @document.title
      raw @content
