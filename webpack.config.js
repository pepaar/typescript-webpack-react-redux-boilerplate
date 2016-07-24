/// <reference path="node_modules/@types/node/index.d.ts"/>

var path = require("path");
var webpackShared = require("./webpack.shared");
var webpack = require('webpack');

var nodeModulesPath = path.join(__dirname, 'node_modules');


var config = {
  // entry points - each will produce one bundled js file and one css file if there is any css in dependency tree
  entry: {
    vendors: [
      'flux',
      'react',
      'react-dom',
      'babel-polyfill',
       path.join(__dirname, 'babel', 'babelhelpers.js'),
       path.join(__dirname, 'babel', 'babelOldIE.js'),
    ],
    app: [
      path.join(__dirname, 'App', 'Index.tsx')
    ]
  },

  // This is path to loaders
  resolveLoader: {
    root: nodeModulesPath
  },

  resolve: {
    extensions: ['', '.tsx', '.ts', '.js', '.less', '.css'],
    modulesDirectories: ["node_modules", "resources"],
    alias: {
       'react$': path.join(nodeModulesPath, 'react', 'react.js'),
       'react-dom': path.join(nodeModulesPath, 'react-dom', 'index.js'),
       'flux': path.join(nodeModulesPath, 'flux', 'index.js'),
       'babel-polyfill': path.join(nodeModulesPath, 'babel-polyfill', 'lib', 'index.js'),
    }
  },

  output: {
      path: path.join(__dirname, 'build'),
      filename: '[name]_[chunkhash].js'
  },

  module: {
    preLoaders: [
      { test: /\.tsx?$/, loader: "tslint", include: path.resolve(__dirname, "App") },
    ],
    noParse: [],
    loaders: [
      // TODO remove crazy require when https://github.com/babel/babel-loader/issues/166 is fixed.
      {
        test: /\.tsx?$/,
        loader: 'babel?cacheDirectory,plugins[]=' + require.resolve(path.join(nodeModulesPath, 'babel-plugin-external-helpers-2')) +
                ',presets[]=' + require.resolve(path.join(nodeModulesPath, 'babel-preset-es2015-loose')) +
                '!ts-loader?configFileName=tsconfig.webpack.json',
        include: path.resolve(__dirname, "App")
      },
      { test: /\.css$/,  loader: "style-loader!css-loader?minimize", include: path.resolve(__dirname, "App") },
      { test: /\.less$/, exclude: /\.module\.less$/, loader: "style-loader!css-loader?minimize!less-loader?compress", include: path.resolve(__dirname, "App") },
      { test: /\.module\.less$/,
        loader: "style-loader!css-loader?minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader?-compress",
        include: path.resolve(__dirname, "App") },
      { test: /\.(jpg|png|woff|eot|ttf|svg|gif)$/, loader: "file-loader?name=[name]_[hash].[ext]", include: path.resolve(__dirname, "App") }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors_[chunkhash].js')
  ],

  tslint: {
    // Rules are in tslint.json
    emitErrors: true, // false = WARNING for webpack, true = ERROR for webpack
    formattersDirectory: path.join(nodeModulesPath, 'tslint-loader', 'formatters')
  },
};

if (webpackShared.isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
     compress: {
        warnings: false
    }
  }));
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {NODE_ENV: '"production"'}
  }));
}

module.exports = config;
