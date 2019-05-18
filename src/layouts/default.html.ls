tag \!DOCTYPE, true <| html: true
html !->
  head !->
    title @document.title
    meta do
      \http-equiv : \X-UA-Compatible
      content: \IE=edge
    meta do
      name: \viewport
      content: "width=device-width, initial-scale=1"
    meta do
      name: \generator
      content: "Metalsmith v#{require \metalsmith/package .version}"

    css-tag <[ font-awesome ]>.map -> "/css/#{it}.min.css"

    script-tag \/theme/init.js defer: false
    script-tag <[ polyfill bootstrap-native ]>.map -> "/js/#{it}.min.js"
    script-tag extra-js!map -> "#{it}.js"
  body !->
    raw @partial \navbar

    div class: \container-fluid, !->
      h1 @document.title
      raw @document.contents

    raw @partial \footer

~function extra-js
  [].concat do
    @document.js or []
    @metal-smith.metadata!js or []

!function script-tag(list, options)
  for src in [].concat list
    script do
      src: src
      defer: false != options?.defer

!function css-tag(list)
  for href in [].concat list
    link do
      rel: \stylesheet
      href: href
