/// <reference path="typings/node/node.d.ts"/>

var path = require("path");
var WebpackConfig = require('webpack-config');

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
    webpack: new WebpackConfig().extend("webpack.test.config")
  });
};