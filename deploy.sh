# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd docs/public

# if you are deploying to a custom domain
echo 'lazy-assedninja.com' > CNAME

git init
git add -A
date=`date +%Y-%m-%d`
git commit -m "deploy ${date}"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:henryhuang1219/henryhuang1219.github.io.git master

cd -