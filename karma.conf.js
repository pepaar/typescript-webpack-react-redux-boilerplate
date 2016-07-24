/// <reference path="node_modules/@types/node/index.d.ts"/>

var path = require("path");
var { Config } = require('webpack-config');

// Karma configuration here
module.exports = function (config) {
  config.set({
    logLevel: config.LOG_DEBUG,
    port: 3334,
    browsers: ['PhantomJS'],
    singleRun: true, //just run once by default
    frameworks: ['jasmine'], //use jasmine as framework
    files: [
      'karma.tests.js' //test files
    ],
    preprocessors: {
      'karma.tests.js': ['webpack', 'sourcemap'] //preprocess with webpack and sourcemap loader
    },
    reporters: ['progress'], //report results in this format
    webpack: new Config().extend("webpack.test.config")
  });
};