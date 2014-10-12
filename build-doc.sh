#!/bin/bash

npm install billy@1.5.x && npm run build-doc
npm install billy@1.6.x && npm run build-doc
npm install billy@1.7.x && npm run build-doc

