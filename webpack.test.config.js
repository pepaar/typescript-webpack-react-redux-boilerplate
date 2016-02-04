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
      { test: /\.ts(x?)$/, loader: 'babel?presets[]=es2015-loose!ts-loader?configFileName=tsconfig.webpack.json', include: path.resolve(__dirname, "App") },
      { test: /\.less$/, loader: 'null-loader' },
      { test: /\.css/, loader: 'null-loader' },
      { test: /\.(jpg|png|jpg|png|woff|eot|ttf|svg|gif)$/, loader: "null-loader" }
    ]
  }
}

module.exports = config;