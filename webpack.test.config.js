/// <reference path="typings/node/node.d.ts"/>

var path = require("path");
var WebpackConfig = require("webpack-config");
var webpackShared = require("./webpack.shared");

var mainConfig = new WebpackConfig().extend("webpack.config");

webpackShared.removeObjectProperties(mainConfig.resolve.alias, ['react']);

var config = {
  resolve: {
    extensions: mainConfig.resolve.extensions,
    alias: mainConfig.resolve.alias
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