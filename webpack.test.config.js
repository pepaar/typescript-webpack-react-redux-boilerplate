/// <reference path="typings/node/node.d.ts"/>

var path = require("path");
var webpackConfig = require("webpack-config");

var mainConfig = webpackConfig.fromFile("webpack.config");

var aliases = {};
for (var key in mainConfig.resolve.alias) {
  aliases[key] = mainConfig.resolve.alias[key];
}

var config = {
  resolve: {
    extensions: mainConfig.resolve.extensions,
    alias: aliases
  },
  resolveLoader: mainConfig.resolveLoader,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader?instance=jsx' },
      { test: /\.less$/, loader: 'null-loader' }
    ]
  }
}

module.exports = webpackConfig.fromObject(config);