(tag "!DOCTYPE", true) html: true
html ->
  head ->
    title @document.title
  body ->
    h1 @document.title
    raw @content
