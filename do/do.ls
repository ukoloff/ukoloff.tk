require! <[
  path
  metalsmith
  metalsmith-markdown
]>

metalsmith path.join __dirname, \..
.source \./src
.destination \./out
.clean true
.use metalsmith-markdown!
.build result

function result(error)
  if error
    throw error
