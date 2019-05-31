require! <[ path child_process fs-extra ]>

branch = \www

module.exports = gh-pages

!function gh-pages
  var msg
  repo = \.

  return git-info!
  .then ->
    msg := it
    # Create branch if absent
    git "branch #{branch} origin/#{branch}"
  .then ->
    fs-extra.empty-dir-sync repo := path.join __dirname, \../tmp/branch branch
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
    # Push back to main repo
    git \push

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
