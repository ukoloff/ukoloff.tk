footer class: \container-fluid, hr, !-> small do
  !-> raw '&copy; '
  require \../package .author.name
  ", "
  y0 = 2016
  if y0 < y = new Date!getFullYear!
    !-> text " - ", y
