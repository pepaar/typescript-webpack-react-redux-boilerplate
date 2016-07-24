/// <reference path="node_modules/@types/node/index.d.ts"/>

var path = require("path");
var { Config } = require("webpack-config");
var webpackShared = require("./webpack.shared");

var mainConfig = new Config().extend("webpack.config");

var config = {
  resolve: {
    extensions: mainConfig.resolve.extensions,
    alias: mainConfig.resolve.alias,
    modulesDirectories: mainConfig.resolve.modulesDirectories
  },
  resolveLoader: mainConfig.resolveLoader,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'babel?presets[]=es2015-loose!ts-loader?configFileName=tsconfig.webpack.json', include: path.resolve(__dirname, "App") },
      { test: /\.less$/, loader: 'null-loader' },
      { test: /\.css/, loader: 'null-loader' },
      { test: /\.(jpg|png|jpg|png|woff|eot|ttf|svg|gif)$/, loader: "null-loader" }
    ]
  }
}

module.exports = config;