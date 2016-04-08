Block = (name, fn)=>
  z = @getBlock name
  z = fn.call z if 'function'==typeof fn
  raw z.toHTML()

(tag "!DOCTYPE", true) html: true
html ->
  head ->
    title @document.title
    Block "meta"
    Block "styles"
    Block "scripts"
  body ->
    h1 @document.title
    raw @content
