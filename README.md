# typescript-webpack-react-flux-boilerplate
This boilerplate combines:
* Typescript
* React
* Flux
* Webpack
* Jasmine
* Karma

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

## Tips & Tricks
###How to enable intellisense in TSX files (VS Code)
For version >= 0.8.0:
* Replace tsserver.js in "Program Files (x86)\Microsoft VS Code\resources\app\plugins\vs.language.typescript\out\lib" with a version from node_modules\typescript\lib

For version < 0.8.0:
* Replace tsserver.js in C:\Users\\{YOURNAME}\AppData\Local\Code\app-{LATEST_VERSION}\resources\app\plugins\vs.language.typescript\lib with a version from node_modules\typescript\lib


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