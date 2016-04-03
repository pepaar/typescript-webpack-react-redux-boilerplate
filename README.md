# typescript-webpack-react-flux-boilerplate
This boilerplate combines:
* [Typescript](https://github.com/Microsoft/TypeScript)
* [Babel](https://babeljs.io/)
* [React](https://github.com/facebook/react)
* [Flux](https://github.com/facebook/flux)
* [LESS](https://github.com/less/less.js)
* [CSS modules](https://github.com/css-modules/css-modules)
* [Webpack](https://github.com/webpack/webpack)
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)

## Getting started
* run **npm install** to download dependencies
* run **npm start** to build and start webpack-dev-server
* open **http://localhost:3333/**

## Build options
* **npm run build** for single build (creates files in build/ folder)
* **npm run watch** for incremental builds on every file change
* **npm start** to build and start webpack-dev-server

## Tests
* **npm test** - single run unit tests in PhantomJS
* **npm run test-debug** - to run repeated unit tests in PhantomJS after every file change
* **npm run test-browser**- single run unit tests in Chrome
* **npm run test-browser-debug** - to run repeated unit tests after every file change in Chrome with debug option
    * After browser is opened click on "DEBUG" button in top right corner
    * Hit F12 to debug