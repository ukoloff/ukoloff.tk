require! <[
  path
  metalsmith
  metalsmith-markdown
  ./livescript
]>

metalsmith path.join __dirname, \..
.source \./src
.destination \./out
.clean true
.use metalsmith-markdown!
.use livescript!
.build result

function result(error)
  if error
    throw error
