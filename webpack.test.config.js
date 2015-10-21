/// <reference path="typings/node/node.d.ts"/>

var path = require("path");
var WebpackConfig = require("webpack-config");

var mainConfig = new WebpackConfig().extend("webpack.config");

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

module.exports = config;