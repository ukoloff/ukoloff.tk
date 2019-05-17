require! <[
  path
  metalsmith
  metalsmith-build-info
  metalsmith-drafts
  metalsmith-markdown
  metalsmith-collections
  metalsmith-summary
  ./livescript
  ./without
  ./drafts
]>

metalsmith path.join __dirname, \..
.source \src
.destination \out
.clean true
.use metalsmith-summary.init!
.use metalsmith-drafts!
.use metalsmith-build-info!
.use metalsmith-markdown!
.use livescript!
.use without $: {require}
.use metalsmith-collections do
  partials:
    pattern: \partials/*
    refer: false
    metadata:
      draft: true
  layouts:
    pattern: \layouts/*
    refer: false
    metadata:
      draft: true
.use drafts!
.use metalsmith-drafts!
.use livescript!
.use metalsmith-summary.print!
.build result

function result(error)
  if error
    throw error
