var theme
storage = window.localStorage

if /\/\w+$/.test location.pathname
  location.href += \/
if storage
  theme = storage.theme
if !theme
  theme = \spacelab

document.writeln """
  <link rel="stylesheet" href="/css/#{theme}/bootstrap.min.css" />
  """
