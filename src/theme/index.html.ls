---
title: Оформление
js: change
---
require! <[ fs path ]>

folder = path.join do
  require.resolve \bootswatch/package
  \..
themes = []
for f in fs.readdir-sync folder
  try
    for file in fs.readdir-sync path.join folder, f when /[.]min[.]/.test file
      themes.push f
      break

form do
  class: \text-center
  !->
    for theme in themes.sort!
      label class: \radio-inline, !->
        input do
          type: \radio
          name: \theme
          value: theme
        text theme
    p!
    button do
      class: 'btn btn-success'
      type: \submit
      !-> i class: 'fa fa-save'
      ' '
      \Save
    text ' '
    button do
      class: 'btn btn-danger'
      type: \button
      !-> i class: 'fa fa-undo'
      ' '
      \Cancel
    for theme in themes
      link do
        rel: \prefetch
        as: \style
        href: "/css/#{theme}/bootstrap.min.css"
