# Docker
To test the issue in dockerized environment, do:
```
rm -rf public && npm run docker-install && npm run docker-run-build-dev
```
The task takes few minutes and after the build is available under the public folder.`

# No Docker
To test the issue locally, just do:
```
npm install
npm run build-dev
```
