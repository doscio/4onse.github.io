#!/bin/bash

#do it only after git source code synchronization
npm run build
rm static/ -rf 
cp -R build/* .
git add static/
git add index.html
git add favicon.ico
git commit -m 'rebuild website'
git push
