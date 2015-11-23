# typescript-webpack-react-flux-boilerplate
This boilerplate combines:
* [Typescript](https://github.com/Microsoft/TypeScript)
* [React](https://github.com/facebook/react)
* [Flux](https://github.com/facebook/flux)
* [Webpack](https://github.com/webpack/webpack)
* [Jasmine](https://github.com/jasmine/jasmine)
* [Karma](https://github.com/karma-runner/karma)
* [CSS modules](https://github.com/css-modules/css-modules)

## Getting started
* run **npm start** to build and start webpack-dev-server
* open **http://localhost:3333/**

## Build options
* **npm run build** for single build
* **npm run watch** for incremental builds on every file change
* **npm start** to build and start webpack-dev-server

## Tests
* **npm test** - single run unit tests in PhantomJS
* **npm run test-debug** - to run repeated unit tests in PhantomJS after every file change
* **npm run test-browser**- single run unit tests in Chrome
* **npm run test-browser-debug** - to run repeated unit tests after every file change in Chrome with debug option
    * After browser is opened click on "DEBUG" button in top right corner
    * Hit F12 to debug

###Visual Studio Code integration
####Show tslint errors only in VS Code
* Hit Ctrl + P
* Run "task tslint-watch"

####Show webpack errors in VS Code
* Hit Ctrl + P
* Run "task webpack-watch"

####Kill running task
* Hit Ctrl + shift + P
* Run "Tasks: Terminate Running Task"