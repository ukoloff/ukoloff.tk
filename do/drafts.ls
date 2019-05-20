# Make all files in draft collections draft

module.exports = ->
  !function drafts(files, metal-smith, done)
    for , col of metal-smith.metadata!collections when col.metadata?.draft
      for file in col
        file.draft = true
    done!
