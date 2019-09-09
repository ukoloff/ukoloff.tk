require! <[ path child_process fs-extra ]>

branch = \gh-pages

module.exports = gh-pages

!function gh-pages
  var msg, travis-ci
  repo = \.

  return git-info!
  .then ->
    msg := it
    # Create branch if absent
    git "branch #{branch} origin/#{branch}"
  .then ->
    fs-extra.empty-dir repo := path.join __dirname, \../tmp/branch branch
  .then ->
    # Init temporary repo
    git "clone ../../.. . -b #{branch}"
  .then ->
    {author} = require \../package
    z = Promise.resolve!
    for let k, v of author
      z .:= then !->
        git [\config "user.#{k}" process.env.["DEPLOY_#{k.to-upper-case!}"] || v]
    z
  .then ->
    # Clear files
    git "rm -rfq ."
  .then ->
    fs-extra.copy do
      path.join __dirname, \../out
      repo
  .then ->
    fs-extra.write-file do
      path.join repo, \.nojekyll
      ''
  .then ->
    git "add --all"
  .then ->
    git <[ commit -m ]>.concat msg
  .then ->
    # Push back to local repo
    git \push
  .then ->
    if travis-ci := \false == process.env.TRAVIS_PULL_REQUEST
      and (user = process.env.DEPLOY_USER)
      and (token = process.env.DEPLOY_TOKEN)
      and (slug = process.env.TRAVIS_REPO_SLUG)
        # Prepare to push directly to GitHub
        git <[ remote add github ]>.concat "https://#{user}:#{token}@github.com/#{slug}.git"
  .then ->
    if travis-ci
      git <[ push github ]>.concat branch

  function git(args)
    resolve, reject <-! new Promise _
    if 'string' == typeof args
      args .= split /\s+/
    child_process.spawn \git args,
      cwd: repo
      stdio: \inherit
    .on \error reject
    .on \exit resolve

    # !function on-exit(code, signal)
    #   if code
    #     reject Error "Exited with code #{code}"
    #   else if signal
    #     reject Error "Killed by signal #{signal}"
    #   else
    #     resolve!

function git-info
  resolve, reject <-! new Promise _
  child_process.exec-file \git <[ log -1 --format=%h:\t%s ]> on-end

  function on-end(error, stdout, stderr)
    if error
      reject error
    else if stderr.length
      reject Error "Oops! #{stderr}"
    else
      resolve stdout.to-string!trim!
