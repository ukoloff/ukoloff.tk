---
title: Theme
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

div do
  class: \text-center
  !->
    for theme in themes.sort!
      label !->
        input do
          type: \radio
          name: \theme
          value: theme
        text theme
      text ' '
