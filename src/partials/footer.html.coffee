y0 = 2016
y = new Date().getFullYear()
div class: 'container-fluid', hr, -> small ->
  raw "&copy; Stas Ukolov, "
  text y0, " - " if y0<y
  text y
