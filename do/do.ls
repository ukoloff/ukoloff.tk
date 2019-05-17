require! <[
  path
  metalsmith
  metalsmith-build-info
  metalsmith-markdown
  metalsmith-collections
  metalsmith-summary
  ./livescript
  ./without
]>

metalsmith path.join __dirname, \..
.source \src
.destination \out
.clean true
.use metalsmith-summary.init!
.use metalsmith-build-info!
.use metalsmith-markdown!
.use livescript!
.use without $: {require}
.use metalsmith-collections do
  partials:
    pattern: \partials/*
    refer: false
  layouts:
    pattern: \layouts/*
    refer: false
.use livescript!
.use metalsmith-summary.print!
.build result

function result(error)
  if error
    throw error
