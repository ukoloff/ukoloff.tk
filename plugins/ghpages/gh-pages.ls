require! {
  path
  child_process: {spawn-sync: spawn}
  \fs-extra : fs
  \../../package : {author}
}

branch = \gh-pages

if process.env.TRAVIS_TAG or
  (pr = process.env.TRAVIS_PULL_REQUEST)? and pr != \false
  throw Error "Deployment to GitHub Pages skipped"

fs.empty-dir-sync repo = path.join __dirname, \../../tmp/www

title = spawn \git <[ log -1 --format=%h:\t%s ]>
  .stdout
  .to-string!trim!

# Create branch if absent
spawn \git [\branch branch, "origin/#{branch}"]

# Init temporary repo
git "clone ../.. . -b #{branch}"
for k, v of author
  git [\config "user.#{k}" process.env.["DEPLOY_#{k.to-upper-case!}"] || v]

# Prepare files
git "rm -rfq ."
fs.copy-sync do
  path.join __dirname, \../../out
  repo
fs.write-file-sync do
  path.join repo, \.nojekyll
  ''
git "add --all"
git <[ commit -m ]>.concat title

# Push back to main repo
git \push

# Push to GitHub
if (user = process.env.DEPLOY_USER) and
   (token = process.env.DEPLOY_TOKEN) and
   (slug = process.env.TRAVIS_REPO_SLUG)
  git <[ remote add github ]>.concat "https://#{user}:#{token}@github.com/#{slug}.git"
  git <[ push github ]>.concat branch

function git(args)
  if 'string' == typeof args
    args .= split /\s+/
  spawn \git args,
    stdio: \inherit
    cwd: repo
