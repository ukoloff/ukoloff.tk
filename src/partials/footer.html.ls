footer class: \container-fluid, hr, !-> small do
  !-> raw \&copy;
  " Stas Ukolov, "
  y0 = 2016
  if y0 < y = new Date!getFullYear!
    !-> text " - ", y
